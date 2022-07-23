// document.write('hello world');
// alert('hello world');
// console.log('hello world');

// variable - Most basic building block
// variables - Store, Access, Modify === value
// Declare, Assignment Operator, Assign Value

let name = "john shrimp taco V";
console.log(name);

// assign value later, modify existing one
let address, zip, state;
address = "101 main street";
zip = "60612";
state = "california";
console.log(address, zip, state);
console.log(zip);

name = "fish burrito";
console.log(name);

// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive - fullname vs fullName

// common practice - camelCase or underscore
let random123_$ = "random";
console.log(random123_$);

// LET vs CONST vs VAR
var value = "some value";
value = "some other value";
let name = "john";
name = "peter";
// using const (CONSTANT) - can't re-assign and it must be declared with a value;
const lastName = "jordan";

//  String Concatenation - combine string values
// `` - backticks (template strings) easier option.

const name = "peter";
const lastName = "shakeandbake";
let fullName = name + " " + lastName;

console.log("hello there your full name is :" + name + " " + lastName);

const website = "udemy";
const url = "https://www." + website + ".com";
console.log(url);

// Numbers

const number = 34;
const number2 = 2.456;

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

// numbers
// +=, -=, /=, *=, ++, --, %
// modulus (%) operator returns the remainder after integer division

let number = 40;
// number = number + 5;
number += 5;
number += 5;
number -= 5;
number *= 2;
// number +=1;
number++;
number--;

const slices = 10;
const children = 3;
const amount = slices / children;
const leftover = slices % children;

console.log(number);

// data types - 7 total
// primitive - string, number, boolean, null, undefined, symbol
// object - array, functions, objects

// typeof - operator (typeof variable) (typeof value)

// string
const text = "some text";
// number
const number = 4;
// boolean
let value1 = true;
let value2 = false;
// null
let result = null;
// undefined
let name;
// symbol (es6)

console.log(typeof text);
console.log(typeof "hello world");

// Array
// Arrays - [], 0 index based
const friend1 = "anna";
const friend2 = "anna";
const friend3 = "anna";

const friends = ["john", "peter", 13, true, undefined, null];
console.log(friends[0]);

let bestFriend = friends[1];
console.log(bestFriend);
friends[4] = "anna";

// Array, Functions and Objects
// Functions - declare, invoke

// declare
function hello() {
  console.log("Hello there, Pete");
  console.log("Hello there, Anna");
  console.log("Hello there, Louise");
}
// invoke
hello();
hello();
hello();

// Array, Functions and Objects
// params - when declare/define
// placeholders, local vars
// arguments, when invoke/call/run
// use vars/values, multiple params, undefined

function greet(names) {
  console.log("Hello there " + names);
}
let anna = "Anna";
// greet Pete
greet("Pete");
// greet Anna
greet(anna);
// greet Louise
greet("Louise");

function greet2(names, second) {
  console.log(second);
  console.log("Hello there " + names);
}

// Arrays, functions and objects
// return
// default undefined, shortcuts, ignores after

const wallHeight = 80;
// 1 inch = 2.54 cm
function calculate(value) {
  return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions = [width, height];
console.log(dimensions);

// Arrays, functions and Objects
// expressions - another way define a function
// create a variable, assign to Function (not value), use var
// diff - hoisting, use - arrow func, libraries

// function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
// function expression
const add = function (num1, num2) {
  return num1 + num2;
};

const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

const multiply = (num1, num2) => num1 * num2;

// Arrays, functions and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
  name: "john",
  lastName: "peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    console.log("hello my name is JOHN");
  },
};

const age = person.age;
console.log(age);

person.name = "bob";

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// conditional statements
// >, <, >=, <=, ==, ===, !=, !===

// if the condition met then runs the code

if (2 > 1) {
  console.log("hello world");
}
const value = true;
if (value) {
  console.log("hello world");
}
if (false) {
  console.log("hello world");
}
const value2 = 1 > 2;
if (value2) {
  console.log("conditional does not met");
} else {
  console.log("so this code runs");
}

// conditional statements
// comparison operators
// >, <, >=, <=, ==, ===, !=, !===
// else if and !
const num1 = 4;
const num2 = 6;
const result = num1 >= num2;
if (num1 > num2) {
  console.log("first number is bigger then second");
} else if (result) {
  console.log("first number equal to the second");
} else {
  console.log("second number is bigger than first");
}

const value = false;
if (!value) {
  console.log("value is not true");
}

// conditional statements
// comparison operators
// >, <, >=, <=, ==, ===, !=, !===
// == checks only value
// === checks value and type

const num1 = 6;
const num2 = "6";
const value = num1 == num2;
const value2 = num1 === num2;
console.log(value);
console.log(value2);

const num1 = 6;
const num2 = 10;
const value = num1 != num2;
const value2 = num1 !== num2;
console.log(value);
console.log(value2);

// logical operators
// (|| - or), (&& - and), !

const name = "peter";
const age = 24;

if (name === "bob" || age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}

// switch
// dice values: 1 -6

const dice = 1;
if (dice === 1) {
  console.log("you got one");
}
else if (dice === 2) {
  console.log("you got two");
}
else (dice < 1 || dice > 6) {
  console.log("you did not roll the dice");
}

switch(dice){
  case 1: console.log("you got one"); 
  break;
  case 2: console.log("you got two");
  break;
  case 3: console.log("you got three");
  break;
  default: console.log("you did not roll the dice");
}


// Loops
// repeatedly run a block of code while conditions are true
// while loops
//  TURN OFF AUTOSAVE (file/autosave)


let amount = 10;

while (amount > 0){
  console.log("I have" + amount + "dollars");
  amount--;
}

// do while loop
// code block first, condition second
// runs at least once

let money = 12;
do{
  console.log("you have " + money + "dollars");
  money++;
} while(money < 10);

// for loop


for(let i = 0; i<10;i++){
  console.log("and the number is : " + i);
}