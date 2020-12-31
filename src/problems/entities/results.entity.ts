import { Column } from 'typeorm';

export class Results {
  @Column('int')
  problem_id: number;

  @Column('text')
  answer: string;

  @Column('int')
  result: number;
}
