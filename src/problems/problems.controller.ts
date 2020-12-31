import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { ProblemsService } from './problems.service';

@Controller('api')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Get('/fetchProblem')
  getProblems() {}

  @Post('/submit')
  submitAnswer() {}
}
