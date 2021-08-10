
 export class Animal{

    private age: number;
    animalName: string;
    protected zone: string;


    constructor(name: string, age?:number, zone?:string){
        this.animalName=name;
        this.age=age;
        this.zone=zone;
    }

    move(distance: string |number =10){
        console.log("Moviendo animal " + distance + " metros y tiene ", this.age + " años!!");
    }


}

//const dog = new Animal("Black");

///console.log(dog.move());

