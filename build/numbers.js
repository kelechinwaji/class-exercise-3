"use strict";
// sum all numbers
Object.defineProperty(exports, "__esModule", { value: true });
var sum = function (num1, num2) {
    return num1 + num2;
};
//Multiply function
var multiply = function (num1, num2) {
    return num1 * num2;
};
// Large number
var lgNum = function (arr) {
    var Large = 0;
    arr.forEach(function (y) {
        if (y > Large) {
            Large = y;
        }
        ;
    });
    return Large;
};
exports.default = { sum: sum, multiply: multiply, lgNum: lgNum };
