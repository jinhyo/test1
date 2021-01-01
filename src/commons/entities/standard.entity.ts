import { PrimaryGeneratedColumn } from 'typeorm';

export class StandardEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
