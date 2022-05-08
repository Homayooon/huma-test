import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'user'})
export class UserModel {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
