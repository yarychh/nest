import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserScema } from './schemas/user.schema';
import { RegisterController } from './register.controller';
import { UsersService } from './users.service';
import { LoginController } from './login.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserScema, collection: 'users' },
    ]),
  ],
  controllers: [RegisterController, LoginController],
  providers: [UsersService],
})
export class UsersModule {}
