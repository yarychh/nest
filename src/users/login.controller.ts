import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('login')
export class LoginController {
  constructor(private userService: UsersService) {}

  @Post()
  public async tryLogin(@Body() creds: LoginUserDto): Promise<User> {
    const resp = await this.userService.tryLoginUser(creds);
    if (!resp) {
      throw new HttpException(
        {
          error: 'No such User',
          status: HttpStatus.UNAUTHORIZED,
        },
        HttpStatus.UNAUTHORIZED,
      );
    } else {
      return resp;
    }
  }
}
