import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problem } from './entities/problem.entity';
import { Result } from './entities/result.entity';
import db from '../../database.json';
import { ProblemType } from 'src/commons/common.enum';
import { AnswersInputDTO } from './dtos/problems-input.dto';
import { ResultsOutputDTO } from './dtos/results-output.dto';
import { ProblemsOutputDTO } from './dtos/problems-output.dto';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepos: Repository<Problem>,
    @InjectRepository(Result)
    private readonly resultRepos: Repository<Result>,
  ) {}

  async getProblems(): Promise<ProblemsOutputDTO> {
    try {
      const count = await this.problemRepos.count();
      if (count === 0) {
        await this.set();
      }

      const problems = await this.problemRepos.find();
      return { problems };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async submitAnswer({ input }: AnswersInputDTO): Promise<ResultsOutputDTO> {
    const userAnswers = JSON.parse(input);
    const resultEntities = [];
    try {
      const problems = await this.problemRepos.find();
      const results = problems.map((problem, index) => {
        let result: boolean;
        if (problem.type === ProblemType.Objective) {
          // 객관식
          result = !userAnswers[index].answer
            ? false // 답을 체크하지 않았을 경우 false
            : problem.answer === userAnswers[index].answer;
        } else if (problem.type === ProblemType.Subjective) {
          // 주관식
          result =
            problem.answer.replace(/ /g, '') ===
            userAnswers[index].answer.replace(/ /g, '');
        } else if (problem.type === ProblemType.Drawing) {
          // 그림 문제
          result = true;
        }

        resultEntities.push({
          problem_id: problem.id,
          result,
          answer: userAnswers[index].answer ? userAnswers[index].answer : '',
        });

        return {
          id: problem.id,
          result,
          answer: problem.answer,
        };
      });

      await this.resultRepos.insert(resultEntities);

      return { results };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  private async set() {
    await this.problemRepos.insert(db);
  }
}
