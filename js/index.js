var _a;
import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { Rocket } from "./rocket.js";
class Index {
    // this.rocket.addCargo(cargo1);
    // console.log(rocket.addCargo(cargo2)); 
    // console.log(rocket.addAstronaut(astronaut1)); 
    // console.log(rocket.addAstronaut(astronaut2));
    // console.log(rocket.currentMassKg()); 
    main() {
        // console.log(Index.rocket.addAstronaut(Index.astronaut2))
        // console.log(Index.rocket.addCargo(Index.cargo2))
        console.log(_a.rocket.addAstronaut(_a.astronaut1));
        console.log(_a.rocket.addCargo(_a.cargo1));
        console.log(_a.rocket.currentMassKg);
    }
}
_a = Index;
//const rocket = new Rocket("pslv", 300000);
Index.cargomaterial = prompt("Enter the cargo material");
Index.cargomass = parseInt(prompt("Enter the cargo mass"));
//static  cargo1 = new Cargo(5000,"Iron");
Index.cargo1 = new Cargo(_a.cargomass, _a.cargomaterial);
//static  cargo2 = new Cargo(10000,"Steel");
Index.astronautmass = parseInt(prompt("Enter the astronaut mass"));
Index.astronautname = prompt("Enter the astronaut name");
// static astronaut1 = new Astronaut(75,"Buzz Aldrin");
Index.astronaut1 = new Astronaut(_a.astronautmass, _a.astronautname);
// static astronaut2 = new Astronaut(68,"Neil Armstrong");
Index.cargoItems = [_a.cargo1];
Index.astronauts = [_a.astronaut1];
Index.rocket = new Rocket("pslv", 300000, _a.cargoItems, _a.astronauts);
const index = new Index();
index.main();
//     static getUserInput(choice: number): IPayload {
//         //condition
//         if(choice==1){
//             return new Rocket("pslv",100000)
//         }
//         else{
//             return new Customer("VU TV",405,"Kishore","TVM")
//         }
//     }
// }
//ENTRY POINT
