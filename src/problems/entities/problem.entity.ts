import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Result } from './result.entity';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  problem_text: string;

  @Column('int')
  type: number;

  @Column('text')
  choices: string;

  @Column('text')
  answer: string;

  @OneToMany(() => Result, (result) => result.problem)
  results: Result[];
}
