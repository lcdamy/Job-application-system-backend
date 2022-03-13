import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from '../entity/application';

@Injectable()
export class ApplicantService {
    constructor(
        @InjectRepository(Application)
        private applicationRepository: Repository<Application>,
    ) { }

    findAll(): Promise<Application[]> {
        return this.applicationRepository.find();
    }

    findOne(id: string): Promise<Application> {
        return this.applicationRepository.findOneOrFail(id);
    }

    create(applicant) {
        const newApplication = this.applicationRepository.create(applicant);
        return this.applicationRepository.save(newApplication);
    }

    async update(id, updateApplicant): Promise<Application> {
        const editapplication = await this.findOne(id);
        editapplication.status = updateApplicant.status;
        return this.applicationRepository.save(editapplication);
    }


}
