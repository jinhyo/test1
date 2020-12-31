import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Problem } from './problem.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  answer: string;

  @Column('int')
  result: number;

  @ManyToOne(() => Problem, (problems) => problems.results)
  problem: Problem;
}
