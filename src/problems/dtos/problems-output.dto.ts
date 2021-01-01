import { PickType } from '@nestjs/mapped-types';
import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Problem } from '../entities/problem.entity';

export class ProblemsOutputDTO {
  @IsArray()
  readonly problems: Problem[];
}
