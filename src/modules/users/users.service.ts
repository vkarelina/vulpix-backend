import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(createUserdto: CreateUserDto) {
    const user = await this.userRepository.create(createUserdto);

    if (!user) {
      throw new BadRequestException('Failed create user');
    }

    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getUserById(id: number) {
    return await this.userRepository.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
  }
}
