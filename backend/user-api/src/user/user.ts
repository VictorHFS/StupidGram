import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    nickName: string;
    @Column({nullable:true})
    picture: string;
    @Column()
    password: string;
    @Column({default:true})
    active: boolean;
    @Column()
    email: string;
}