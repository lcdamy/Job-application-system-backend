import { Body, Controller, Get, NotFoundException, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApplicantService } from './applicant.service';
import { ApplicantDto } from './dto/applicant.dto';
import { Application } from '../entity/application';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { Helper } from '../shared/helper';
import * as fs from 'fs';
import * as path from 'path';
import { createReadStream } from 'fs';
import { join } from 'path';

@ApiTags('Applicant')
@Controller('applicant')
export class ApplicantController {
    constructor(private applicantService: ApplicantService) { }

    @ApiOkResponse({ type: Application, isArray: true })
    @Get()
    @UseGuards(AuthGuard('jwt'))
    getApplicants(): any {
        const applicants = this.applicantService.findAll();
        if (!applicants) {
            throw new NotFoundException();
        }
        return applicants;
    }

    @ApiCreatedResponse({ type: Application })
    @Post('create')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: Helper.destinationPath,
            filename: Helper.customFileName,
        })
    }))
    async createApplicant(@Body() newApplicant: ApplicantDto, @UploadedFile() file: Express.Multer.File) {
        return await this.applicantService.create(newApplicant, file);
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

    @ApiOkResponse({ type: Application, isArray: false })
    @Get(':id')
    getApplicantById(@Param('id') id: string): any {
        const applicant = this.applicantService.findOne(id);
        if (!applicant) {
            throw new NotFoundException();
        }
        return applicant;
    }

    @ApiOkResponse()
    @Get('download/:file')
    getFile(@Res() res: any, @Param('file') name: string) {
        const file = createReadStream(join(process.cwd(), './uploadedFiles/cv/' + name));
        file.pipe(res);
    }




}
