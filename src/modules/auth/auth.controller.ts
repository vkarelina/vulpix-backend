import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RequestWithUser } from '../users/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

  @Post('registration')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  whoami(@Req() req: RequestWithUser) {
    return req.user;
  }
}
