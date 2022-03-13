import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { Application } from '../entity/application';

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
  providers: [ApplicantService],
  controllers: [ApplicantController],
  exports: [TypeOrmModule]
})
export class ApplicantModule { }
