# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases

TypeScript helps catch errors during development rather than at runtime. It is a typed superset of JavaScript. The main characteristic of TypeScript is its ability to handle complex types, especially union types. However, it can not always determine which type a variable belongs to.

In this situation, the type guard is very useful. In this blog post, we will discuss why type guards are necessary, various Types of Type Guards, and Their Use Cases.

## Why type guards are necessary?

When we use union type in our code, it is difficult to detect which type which it is at runtime. Where type guard are neccessary because it helps TypeScript detect the type of variable so that we can access properties and methods relevant to that type.

When we work with the union types in TypeScript, there are occurrences where a variable can have multiple types, but TypeScript would not able to detect which type it is without extra logic. Type guards solve this issue by clearly determining the type of a variable.

## Various Types of Type Guards

There are different ways to narrow types iin TypeScript. Let's explore the ways.

***- typeof Type Guard:*** &nbsp;
The typeof operator is neccessary to narrow down the type of variables when we work with primitive types such as number, string, and boolean.

**Example:**

``` TypeScript
const getString = (value: number | string ) : string =>{
    if (typeof(value) === 'number'){
        return `${value}`;
    }
        return value; 
 }

 // Sample Input
 const result1 = getString("typeof Type Guard") 
 const result2 = getString(10) 
 
 // Output
 console.log(result1, result2)
```

&nbsp;&nbsp; **Use Case:** typeof is prefer when working with primitive types in a union type and want to limit the type.;

***- instanceof Type Guard:***  &nbsp; The instanceof operator determines whether an object belongs to a particular class. This is usefull, when working with class-based objects.
</br>

**Example:**

``` TypeScript
class Person {

     constructor (public id: string, public name: string, public age: number, public email: string){
        this.id = id
        this.name = name
        this.age = age
        this.email = email
    }

    getInformation(){
        console.log(`${this.name} is ${this.age} year old. His/Her email is ${this.email}`)
    }
}

class Teacher extends Person {
    constructor (public id: string, public name: string, public age: number, public email: string , public subject : string){
        super(id, name, age, email)
    }

    getSubject(){
        console.log(`${this.name} teach ${this.subject}`)
    }
}

class Student extends Person {
    constructor(public id: string, public name: string, public age: number, public email: string){
        super(id, name, age, email)
    }

    getResult(){
        console.log(`${this.name} completed graduation.`)
    }
}

const ShowInfo = (ritu: Teacher | Student) =>{
    if(ritu instanceof Teacher){
        (ritu as Teacher).getSubject()
    }
    else if(ritu instanceof Student){
        (ritu as Student).getResult()
    }

    ritu.getInformation()
}

const student = new Student("120", "Johurul", 60, "j@gmail.com");
const teacer = new Teacher( "201", "Motiul", 50, "M@gmail.com", "Math");

ShowInfo(student);
ShowInfo(teacer);
```

&nbsp;&nbsp; **Use Case:** instanceof is prefer when working with class instances or constructor functions.;

***-in Type Guard***

The in operator checks if a property exists in an object.

**Example:**

``` TypeScript
const arrayOfNumbers: number[] = [1,2,3,4,5,6,7,8]

const checkExistance = (value: number): boolean => {
if (value in arrayOfNumbers){
    return true
}
return false
}

console.log(checkExistance(2))
console.log(checkExistance(20))
```

&nbsp;&nbsp; **Use Case:** When objects of a union type share some features but differ in others, the in operator comes in handy.

### Conclusion

In TypeScript type guards ensure code security by verifying types. It helps to identify errors early by reducing a variable to a more particular type. TypeScript has a variety of type guards, including instanceof, typeof, and in guards.
