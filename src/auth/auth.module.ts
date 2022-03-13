import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user';

@Module({

  controllers: [AuthController],
  imports: [JwtModule.register({
    secret: 'super-secret-lcdamy'
  }), TypeOrmModule.forFeature([User])],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
