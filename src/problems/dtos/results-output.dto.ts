import { PickType } from '@nestjs/mapped-types';
import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator';

class OutputElement {
  @IsNumber()
  readonly id: number;

  @IsBoolean()
  readonly result: boolean;

  @IsString()
  readonly answer: string;
}

export class ResultsOutputDTO {
  @IsArray()
  readonly results: OutputElement[];
}
