import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { IPayload } from "./payload.js";
export{Rocket}
class Rocket {
    name: String;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    //constructor
    constructor(name: string, totalCapacityKg: number,cargoItems: Cargo[], astronauts: Astronaut[]) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //function to find total mass
    sumMass(items: IPayload[]): number {
        let totalMass = 0;
        for (const item of items) {
            totalMass += item.massKg;
        }

        return totalMass;

    }
    //function to return current mass
    currentMassKg(): number {
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    }
    //function to check whether an item can be added
    canAdd(item: IPayload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    //function to add cargo
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    //function to add astronaut
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
