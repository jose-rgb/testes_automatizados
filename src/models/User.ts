import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

//Entity => declarando que essa class e uma entidade 

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        //verificar se o id existe se n, id = uuid
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };



