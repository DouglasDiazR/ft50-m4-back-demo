import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
<<<<<<< HEAD

@Module({
  imports: [UsersModule],
=======
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, TodosModule],
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
