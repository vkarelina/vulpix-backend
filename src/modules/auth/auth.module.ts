import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configServece: ConfigService) => ({
        secret: configServece.get('PRIVATE_KEY'),
        signOptions: {
          expiresIn: '72h',
        },
      }),
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
