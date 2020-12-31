import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problem } from './entities/problem.entity';
import { Result } from './entities/result.entity';
import db from '../../database.json';

@Injectable()
export class ProblemsService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepos: Repository<Problem>,
    @InjectRepository(Result)
    private readonly resultRepos: Repository<Result>,
  ) {}

  async getProblems(): Promise<Problem[]> {
    try {
      return await this.problemRepos.find();
    } catch (error) {
      console.error(error);
    }
  }
  async submitAnswer() {}
  async set(): Promise<Boolean> {
    try {
      for (let i = 0; i < 15; i++) {
        await this.problemRepos.save(db[i]);
      }
      //   db.forEach(async (data) => {
      //     console.log('data', data);

      //     // const problems = this.problemRepos.create(data);
      //     await this.problemRepos.save(data);
      //   });

      return true;
    } catch (error) {
      console.error(error);
    }
  }
}
