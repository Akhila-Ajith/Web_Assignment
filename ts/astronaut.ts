import { IPayload } from "./payload.js";
export{Astronaut};
class Astronaut implements IPayload {
    massKg: number;
    name: string;

    constructor(massKg: number,
        name: string) {
        this.massKg = massKg;
        this.name = name;
    }


}
