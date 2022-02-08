"use strict";
// removing the third items from the array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var cut3 = function (arr) {
    arr.splice(2, 1);
    return arr;
};
var addArr = function (arr) {
    var result = 0;
    arr.forEach(function (num) {
        result += num;
    });
    return result;
};
var concatArr = function (arr1, arr2) {
    var result = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    return result;
};
exports.default = { cut3: cut3, addArr: addArr, concatArr: concatArr };
