import { Column } from 'typeorm';

enum Type {
  Objective = 1,
  Subjective = 2,
  Drawing = 3,
}

export class Problems {
  @Column('text')
  problem_text: string;

  @Column({ type: 'enum', enum: Type })
  type: number;

  @Column('text')
  choices: string;

  @Column('text')
  answer: string;
}
