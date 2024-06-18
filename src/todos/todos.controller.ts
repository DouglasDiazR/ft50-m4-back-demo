<<<<<<< HEAD
import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.services';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
=======
import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";

//* /todos
@Controller('todos')
export class TodosController {
  //* Inyectamos TodosService
  constructor(private readonly todosService: TodosService) {}

>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e
