import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './entities/problem.entity';
import { Result } from './entities/result.entity';
import { ProblemsController } from './problems.controller';
import { ProblemsService } from './problems.service';

@Module({
  imports: [TypeOrmModule.forFeature([Problem, Result])],
  controllers: [ProblemsController],
  providers: [ProblemsService],
})
export class ProblemsModule {}
