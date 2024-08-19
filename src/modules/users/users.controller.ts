import { Controller, Get, Req, UseGuards } from '@nestjs/common';

import { Request } from 'express';

import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './models/user.model';

export interface RequestWithUser extends Request {
  user: User;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getUserById(@Req() req: RequestWithUser) {
    return this.usersService.getUserById(req.user.id);
  }
}
