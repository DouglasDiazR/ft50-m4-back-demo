<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TodosService } from './todos.services';
import { TodosController } from './todos.controller';
=======
import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [TodosService],
})
<<<<<<< HEAD
export class todosModule {}
=======
export class TodosModule {}
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e
