import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
const bcrypt = require("bcrypt");

import { AuthDto } from './dto';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>, private jwtService: JwtService) {

    }


    async findOne(credential) {
        const user = await this.userRepository.findOne({ email: credential.email });
        if (!user) throw new UnauthorizedException('incorrect credential');
        const validPassword = await bcrypt.compare(credential.password, user.password);
        if (!validPassword) throw new UnauthorizedException('incorrect credential');
        return this.signUser(user.id, user.email);
    }

    signUser(UserId: number, email: string) {
        return {
            jwt: this.jwtService.sign({
                sub: UserId,
                email
            })
        };
    }

    async createUser(dto: AuthDto) {
        const salt = await bcrypt.genSalt(10);
        dto.password = await bcrypt.hash(dto.password, salt);
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }

    localLogout(dto: AuthDto) {

    }

}
