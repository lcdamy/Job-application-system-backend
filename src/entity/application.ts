import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Application {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    firstname: string;

    @ApiProperty()
    @Column()
    lastname: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    dob: Date;

    @ApiProperty()
    @Column()
    gender: number;

    @ApiProperty()
    @Column()
    status: string;

    @ApiProperty({ required: false })
    @Column()
    bio: string;

    @ApiProperty()
    @Column()
    cv: string;

}