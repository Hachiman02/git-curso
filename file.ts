function helloWordTS (param:number, arr: Array<number>, anyValue: undefined, obj:object): string {
    const hello:string= 'hello';
    const word:string= 'hello';

    return hello+word;
}


//let myNumber : Number=10;

//myNumber= Number('40');

//helloWordTS(10,[1,2,3,4], undefined ,{ id: 1, name: "juan" } );

function sumaArrays(arrOne: Array<number>, arrTwo: Array<number>){
    const sumOne: number = arrOne.reduce((acum:number,value:number) => acum+value);
    const sumTwo: number = arrTwo.reduce((acum:number,value:number) => acum+value);

    return sumOne+sumTwo;
}

//sumaArrays([2,3,4,5,6],[4,5,6,7,4]);

function formatobject(id: number):{id:number}{
    return {id}
}

const formatobjectwo   = (id?:number| string |undefined) : void|number|string|undefined/* con '?' puede estar el parametro o no */ =>{
    const numero : string|number = '10';

    console.log("10");
}

formatobjectwo();


interface persona{
    id: number;
    firstName: string;
    lastName: string;
    age?: number
}

interface formatoDeRetorno{
    id:number;
    firstName:string;
}

const personita:persona = {
    id:2,
    firstName:"Pablo",
    lastName: "Perez",
    age: 25
}

const getPesonsa = (persona: persona) :formatoDeRetorno=>{
    return {id: persona.id, firstName: persona.firstName};
}

const getAge = (persona:persona): number =>{
    return persona.age;
} 

console.log(getAge(personita));

console.log(getPesonsa(personita));