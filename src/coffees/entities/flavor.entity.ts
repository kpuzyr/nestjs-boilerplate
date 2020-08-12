import { PrimaryGeneratedColumn, Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Coffee } from "./coffee.entity";

@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @JoinTable()
    // @ManyToMany(
    //     type => Coffee,
    //     (coffee) => coffee.flavors
    // )

    @ManyToMany(type => Coffee, coffee => coffee.flavors)
    coffees: Coffee[];
}
