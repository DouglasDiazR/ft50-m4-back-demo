import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './users.services';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middlewares/middlrewaresLogger';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
