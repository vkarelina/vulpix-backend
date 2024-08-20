import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const authHeader = req.headers.authorization;
      const authSchema = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (authSchema !== 'Bearer' || !token) {
        throw new UnauthorizedException('User is not authorized');
      }

      const verifiedToken = this.jwtService.verify(token);

      const user = {
        id: verifiedToken.id,
      };

      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException('User is not authorized');
    }
  }
}
