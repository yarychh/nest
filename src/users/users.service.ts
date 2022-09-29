import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async getAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  public async tryLoginUser(loginDto: LoginUserDto): Promise<User> | null {
    const registeredUser = (await this.userModel.find()).filter(
      (user) =>
        user.password === loginDto.password && user.email === loginDto.email,
    );
    return registeredUser.length ? registeredUser[0] : null;
  }

  public async registerNewUser(userData: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }
}
