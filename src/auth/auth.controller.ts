import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthDto } from './dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('create')
    create(@Body() dto: AuthDto): any {
        return this.authService.createUser(dto);
    }

    @Post('login')
    localLogin(@Body() credentials): any {
        return this.authService.findOne(credentials);
    }

    @Post('logout')
    localLogout(@Body() dto: AuthDto): any {
        return this.authService.localLogout(dto);
    }

}
