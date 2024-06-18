import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.services';

// GET /users
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }
}
