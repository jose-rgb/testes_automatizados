import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';


@Entity("surveys")
class Survey {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        //verificar se o id existe se n, id = uuid
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Survey }