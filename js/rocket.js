export { Rocket };
class Rocket {
    //constructor
    constructor(name, totalCapacityKg, cargoItems, astronauts) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //function to find total mass
    sumMass(items) {
        let totalMass = 0;
        for (const item of items) {
            totalMass += item.massKg;
        }
        return totalMass;
    }
    //function to return current mass
    currentMassKg() {
        const cargoMass = this.sumMass(this.cargoItems);
        const astronautMass = this.sumMass(this.astronauts);
        return cargoMass + astronautMass;
    }
    //function to check whether an item can be added
    canAdd(item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }
    //function to add cargo
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    //function to add astronaut
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
