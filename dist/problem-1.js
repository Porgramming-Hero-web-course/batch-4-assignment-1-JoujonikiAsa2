"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumArray = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));
