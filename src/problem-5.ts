type Person = {
    name: string,
    age: number
}

const getProperty = <T, K extends keyof T>(obj: T, nameOfProperty: K): T[K] => {
    return obj[nameOfProperty];
  }

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));