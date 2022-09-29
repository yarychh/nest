import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('register')
export class RegisterController {
  constructor(private userService: UsersService) {}

  @Get()
  public getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  public register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.registerNewUser(createUserDto);
  }
}
