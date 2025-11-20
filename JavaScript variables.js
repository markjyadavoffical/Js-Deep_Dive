// js varables  =  Data containers

// JavaScript variables can be declared in 4 ways:

//mordern way    let   and const

//old way       var and auto (not recommended)



// JavaScript Identifiers
// Variables are identified with unique names called identifiers.

// Names can be short like x, y, z.

// Names can be descriptive age, sum, carName.

// The rules for constructing names (identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter, a $ sign or an underscore (_).
// Names are case sensitive (X is different from x).
// Reserved words (JavaScript keywords) cannot be used as names.


let $name = "mark"
let $n = "muskan"


console.log($name)
console.log($n)




// One Statement, Many Variables

let a  =  "mark", b = "muskan", c = "mfg"

console.log(a)
console.log(b)
console.log(c)



// When to use JavaScript const?
// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp


// Constant Arrays
// You can change the elements of a constant array:


const cars  =  ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);


// But you can NOT reassign the array:

// const cars1 = ["Saab", "Volvo", "BMW"];
// cars1 = ["Toyota", "Volvo", "BMW"];
// console.log(cars); // This will give an error




// Constant Objects
// You can change the properties of a constant object:

const person = {firstName:"John", lastName:"Doe", age:50};
person.firstName = "Mickey";
person.lastName = "Mouse";
console.log(person);




// But you can NOT reassign the object:

// const person1 = {firstName:"John", lastName:"Doe", age:50};
// person1 = {firstName:"Mickey", lastName:"Mouse", age:50};
// console.log(person1); // This will give an error




// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


// // String
// let color = "Yellow";
// let lastName = "Johnson";

// // Number
// let length = 16;
// let weight = 7.5;

// // BigInt
// let x = 1234567890123456789012345n;
// let y = BigInt(1234567890123456789012345)

// // Boolean
// let x = true;
// let y = false;

// // Object
// const person = {firstName:"John", lastName:"Doe"};

// // Array object
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object
// const date = new Date("2022-03-25");

// // Undefined
// let x;
// let y;

// // Null
// let x = null;
// let y = null;

// // Symbol
// const x = Symbol();
// const y = Symbol();