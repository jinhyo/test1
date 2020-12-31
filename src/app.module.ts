import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './problems/entities/problem.entity';
import { Result } from './problems/entities/result.entity';
import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [
    ProblemsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'math',
      synchronize: true,
      logging: true,
      entities: [Problem, Result],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
