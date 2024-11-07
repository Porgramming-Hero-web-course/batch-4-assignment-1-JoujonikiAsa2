"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (array) => {
    const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
    return uniqueArray;
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
