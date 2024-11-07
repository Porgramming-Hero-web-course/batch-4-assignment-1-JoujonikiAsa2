"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date();
        return (currentYear.getFullYear() - this.year);
    }
}
const car = new Car("Honda", "Civic", 2018);
const carAge = car.getCarAge();
console.log(`${carAge} (assuming current year is 2024)`);
