"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getProperty = (obj, nameOfProperty) => {
    return obj[nameOfProperty];
};
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
