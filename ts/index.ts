import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { IPayload } from "./payload.js";
import { Rocket } from "./rocket.js";

class Index {

    
   
//const rocket = new Rocket("pslv", 300000);
static cargomaterial=prompt("Enter the cargo material");
static cargomass=parseInt(prompt("Enter the cargo mass"));
//static  cargo1 = new Cargo(5000,"Iron");
static  cargo1 = new Cargo(Index.cargomass,Index.cargomaterial);
//static  cargo2 = new Cargo(10000,"Steel");
static astronautmass=parseInt(prompt("Enter the astronaut mass"));
static astronautname=prompt("Enter the astronaut name");
// static astronaut1 = new Astronaut(75,"Buzz Aldrin");
static astronaut1 = new Astronaut(Index.astronautmass,Index.astronautname);
// static astronaut2 = new Astronaut(68,"Neil Armstrong");
static cargoItems: Cargo[]=[this.cargo1];
static astronauts: Astronaut[]=[this.astronaut1];

static rocket = new Rocket("pslv", 300000,this.cargoItems,this.astronauts)
// this.rocket.addCargo(cargo1);
// console.log(rocket.addCargo(cargo2)); 
// console.log(rocket.addAstronaut(astronaut1)); 
// console.log(rocket.addAstronaut(astronaut2));
// console.log(rocket.currentMassKg()); 



main(){
    // console.log(Index.rocket.addAstronaut(Index.astronaut2))
    // console.log(Index.rocket.addCargo(Index.cargo2))
    console.log(Index.rocket.addAstronaut(Index.astronaut1))
     console.log(Index.rocket.addCargo(Index.cargo1))
     //console.log(Index.rocket.currentMassKg);
    }

}
const index=new Index();
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
