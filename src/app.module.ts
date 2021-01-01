import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './problems/entities/problem.entity';
import { Result } from './problems/entities/result.entity';
import { ProblemsModule } from './problems/problems.module';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [Problem, Result],
    }),
    ProblemsModule,
  ],
})
export class AppModule {}
