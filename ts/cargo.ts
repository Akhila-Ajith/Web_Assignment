import { IPayload } from "./payload.js";
export{Cargo}
class Cargo implements IPayload{
    massKg: number;
    material:string;
    constructor(massKg: number,
        material: string) {
        this.massKg = massKg;
        this.material = material;
    }


}
