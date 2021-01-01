import { StandardEntity } from 'src/commons/entities/standard.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Problem } from './problem.entity';

@Entity()
export class Result extends StandardEntity {
  @Column('text')
  problem_id: string;

  @Column('text')
  answer: string;

  @Column('int')
  result: number;

  @ManyToOne(() => Problem, (problems) => problems.results)
  problem: Problem;
}
