function helloWordTS(param, arr, anyValue, obj) {
    var hello = 'hello';
    var word = 'hello';
    return hello + word;
}
//let myNumber : Number=10;
//myNumber= Number('40');
//helloWordTS(10,[1,2,3,4], undefined ,{ id: 1, name: "juan" } );
function sumaArrays(arrOne, arrTwo) {
    var sumOne = arrOne.reduce(function (acum, value) { return acum + value; });
    var sumTwo = arrTwo.reduce(function (acum, value) { return acum + value; });
    return sumOne + sumTwo;
}
//sumaArrays([2,3,4,5,6],[4,5,6,7,4]);
function formatobject(id) {
    return { id: id };
}
var formatobjectwo = function (id) {
    var numero = '10';
    console.log("10");
};
formatobjectwo();
var personita = {
    id: 2,
    firstName: "Pablo",
    lastName: "Perez",
    age: 25
};
var getPesonsa = function (persona) {
    return { id: persona.id, firstName: persona.firstName };
};
var getAge = function (persona) {
    return persona.age;
};
console.log(getAge(personita));
console.log(getPesonsa(personita));
