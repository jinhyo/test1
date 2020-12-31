import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problems } from './problems/entities/problems.entity';
import { ProblemsModule } from './problems/problems.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'math',
      synchronize: true,
      logging: true,
      entities: [Problems],
    }),
    ProblemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
