import {Animal} from "./Animal";

class bear extends Animal{

    food: string;

    constructor (name:string, age?:number, zone?:string, food?: string){
        super(name, age , zone);
        this.food=food;
    }

    move(distance: number = 25){
        console.log("Oso caminando en la zona " + this.zone);
        super.move(distance);
    }
}
let bearOne = new bear("Yogui",10,"Peru","miel");
console.log(bearOne.move());