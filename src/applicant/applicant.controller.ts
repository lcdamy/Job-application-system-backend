import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApplicantService } from './applicant.service';
import { ApplicantDto } from './dto/applicant.dto';
import { Application } from '../entity/application';

@ApiTags('Applicant')
@Controller('applicant')
export class ApplicantController {
    constructor(private applicantService: ApplicantService) { }

    @ApiOkResponse({ type: Application, isArray: true })
    @Get()
    getApplicants(): any {
        const applicants = this.applicantService.findAll();
        if (!applicants) {
            throw new NotFoundException();
        }
        return applicants;
    }

    @ApiCreatedResponse({ type: Application })
    @Post(':id')
    updateApplicant(@Param() id: string, @Body() applicationStatus: string): any {
        const apply = this.applicantService.update(id, applicationStatus);
        if (!apply) {
            throw new NotFoundException();
        }
        return apply;
    }

    @ApiCreatedResponse({ type: Application })
    @Post('create')
    async createApplicant(@Body() newApplicant: ApplicantDto) {
        return await this.applicantService.create(newApplicant);
    }

    @ApiOkResponse({ type: Application, isArray: false })
    @Get(':id')
    getApplicantById(@Param('id') id: string): any {
        const applicant = this.applicantService.findOne(id);
        if (!applicant) {
            throw new NotFoundException();
        }
        return applicant;
    }
}
