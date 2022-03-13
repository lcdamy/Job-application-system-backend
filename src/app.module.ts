import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user';
import { Application } from './entity/application';
import { ApplicantModule } from './applicant/applicant.module';
import path from 'path';
import config from '../ormconfig';
// import config from './ormconfig';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(config), ApplicantModule, AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
