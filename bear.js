"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal_1 = require("./Animal");
var bear = /** @class */ (function (_super) {
    __extends(bear, _super);
    function bear(name, age, zone, food) {
        var _this = _super.call(this, name, age, zone) || this;
        _this.food = food;
        return _this;
    }
    bear.prototype.move = function (distance) {
        if (distance === void 0) { distance = 25; }
        console.log("Oso caminando en la zona " + this.zone);
        _super.prototype.move.call(this, distance);
    };
    return bear;
}(Animal_1.Animal));
var bearOne = new bear("Yogui", 10, "Peru", "miel");
console.log(bearOne.move());
