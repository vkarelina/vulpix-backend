import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);

    if (!user) {
      throw new BadRequestException('Failed create user');
    }

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();

    if (!users) {
      throw new BadRequestException('Failed get users');
    }

    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
