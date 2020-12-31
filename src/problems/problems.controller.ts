import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { Problem } from './entities/problem.entity';
import { ProblemsService } from './problems.service';

@Controller('api')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Get('/fetchProblem')
  getProblems(): Promise<Problem[]> {
    return this.problemsService.getProblems();
  }

  @Post('/submit')
  submitAnswer() {}

  @Get('/set')
  set(): Promise<Boolean> {
    return this.problemsService.set();
  }
}
