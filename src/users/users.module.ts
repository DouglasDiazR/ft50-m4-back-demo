import { MiddlewareConsumer, Module } from '@nestjs/common';
<<<<<<< HEAD
import { UserService } from './users.services';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middlewares/middlrewaresLogger';
=======
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e

@Module({
  imports: [],
  controllers: [UsersController],
<<<<<<< HEAD
  providers: [UserService],
=======
  providers: [UsersService],
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
