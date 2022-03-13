import { ApiProperty } from "@nestjs/swagger";

export class ApplicantDto {
    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    dob: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    status: string;

    @ApiProperty({ required: false })
    bio: string;

    @ApiProperty()
    cv: string;
}