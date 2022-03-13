import {MigrationInterface, QueryRunner} from "typeorm";

export class migrations1647198440503 implements MigrationInterface {
    name = 'migrations1647198440503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`application\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`firstname\` varchar(255) NOT NULL,
                \`lastname\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`dob\` datetime NOT NULL,
                \`gender\` int NOT NULL,
                \`status\` varchar(255) NOT NULL,
                \`bio\` varchar(255) NOT NULL,
                \`cv\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`names\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`application\`
        `);
    }

}
