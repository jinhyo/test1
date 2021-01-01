import { IsNumber, IsString } from 'class-validator';
import { StandardEntity } from 'src/commons/entities/standard.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Result } from './result.entity';

@Entity()
export class Problem extends StandardEntity {
  id: number;

  @Column('text')
  problem_text: string;

  @Column('int')
  type: number;

  @Column('text', { nullable: true })
  choices: string;

  @Column('text')
  answer: string;

  @OneToMany(() => Result, (result) => result.problem)
  results: Result[];
}
