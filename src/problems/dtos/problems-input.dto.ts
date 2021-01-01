import { IsNotEmpty, IsString } from 'class-validator';

export class AnswersInputDTO {
  @IsString()
  @IsNotEmpty()
  readonly input: string;
}
