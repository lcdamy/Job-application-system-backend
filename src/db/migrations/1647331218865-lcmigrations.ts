import {MigrationInterface, QueryRunner} from "typeorm";

export class lcmigrations1647331218865 implements MigrationInterface {
    name = 'lcmigrations1647331218865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "application" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, "email" varchar NOT NULL, "dob" datetime NOT NULL, "gender" integer NOT NULL, "status" varchar NOT NULL, "bio" varchar NOT NULL, "cv" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "names" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "application"`);
    }

}
