"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateProfile = (myProfile, updates) => {
    return Object.assign(Object.assign({}, myProfile), updates);
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
