import { Controller, Get } from '@nestjs/common';
<<<<<<< HEAD
import { UserService } from './users.services';

// GET /users
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUser();
=======
import { UsersService } from './users.service';

//* GET /users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
>>>>>>> 764bd384361943a1bd5525995c10f7fbc626b75e
  }
}
