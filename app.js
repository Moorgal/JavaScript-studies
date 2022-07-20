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
