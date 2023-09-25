//This is my first Js Code

console.log('Hello World');

//by default variable are undefined so we always need to define values of variable
//Variables cannot be a reserved keyword
//Cannot start with a number
//Cannot contain a space or hyphen(-)
//Are case sensitive
let name = 'Pardarshee';
console.log(name);

let firstName = 'Aniket';
let lastName = 'Singh';

//Value of variable is Changeable whereas const value cannot be changed
let interestRate = 3.0;
interestRate = 1;

const interst = 2;
// interst = 32;    throws error
console.log(interestRate);
console.log(interst);

//Data Types: Primitve and Reference types

let name1 = 'Pardarshee Priya'; //String Literal
let age = 21; //Number Literal
let isApproved = true; //Boolean Literal
let fName = undefined; //undefined type
let selectColor = null; //Null

// Dynamic typing - JS
console.log(typeof name1);

//Objects
let person = {
  name: 'Yashi',
  age: 18,
};

person.name = 'Anshu'; //dot notation
console.log(person);
let selection = 'name';
person[selection] = 'Mary'; //bracket notation
console.log(person);

//Arrays
let selectedColors = ['red', 'blue', 'yellow', 'black', 'white'];
console.log(selectedColors);

// Access elements
console.log(selectedColors[2]);
selectedColors[2] = 'green';
console.log(selectedColors[2]);

console.log(typeof selectedColors);

//Functions in JS
function greet(name1, lastname) {
  console.log('Hello ' + name1 + ' ' + lastname);
}

greet('Anki', 'Parashar');
greet('Aniket', 'Kumar');

//Calculate value function
function square(number) {
  return number * number;
}

let answer = square(2);
console.log(answer);
