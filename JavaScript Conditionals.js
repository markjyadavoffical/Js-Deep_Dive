// Conditional Statements
// Conditional Statements allow us to perform different actions for different conditions.

// Conditional statements run different code depending on true or false conditions.

// Conditional statements include:

// if
// if...else
// if...else if...else
// switch
// // ternary (? :)


// When to use Conditionals
// Use if to specify a code block to be executed, if a specified condition is true
// Use else to specify a code block to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative code blocks to be executed
// Use (? :) (ternary) as a shorthand for if...else


//     if (condition1) {
//   // code to execute if condition1 is true
// } else if (condition2) {
//   // code to execute if the condition1 is false and condition2 is true
// } else {
//   // code to execute if the condition1 is false and condition2 is false
// }

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }



// condition ? expression1 : expression2


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}



let name = null;
let displayName = name ?? "Guest User";
console.log(displayName);  // Output: "Guest User"


let a = null;
let b = undefined;
// let c = "Hello";
let result = a ?? b ??  "Default";
console.log(result);  // Output: "Default"