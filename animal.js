"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, age, zone) {
        this.animalName = name;
        this.age = age;
        this.zone = zone;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        console.log("Moviendo animal " + distance + " metros y tiene ", this.age + " años!!");
    };
    return Animal;
}());
exports.Animal = Animal;
//const dog = new Animal("Black");
///console.log(dog.move());
