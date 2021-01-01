import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnswersInputDTO } from './dtos/problems-input.dto';
import { ProblemsOutputDTO } from './dtos/problems-output.dto';
import { ResultsOutputDTO } from './dtos/results-output.dto';
import { Problem } from './entities/problem.entity';
import { ProblemsService } from './problems.service';

@Controller('api')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Get('/fetchProblem')
  getProblems(): Promise<ProblemsOutputDTO> {
    return this.problemsService.getProblems();
  }

  @Post('/submit')
  submitAnswer(@Body() answers: AnswersInputDTO): Promise<ResultsOutputDTO> {
    return this.problemsService.submitAnswer(answers);
  }
}
