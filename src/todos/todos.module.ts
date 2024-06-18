import { Module } from '@nestjs/common';
import { TodosService } from './todos.services';
import { TodosController } from './todos.controller';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [TodosService],
})
export class todosModule {}
