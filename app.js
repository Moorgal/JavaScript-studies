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
state = "california"
console.log(address,zip,state);
console.log(zip);

name = "fish burrito";
console.log(name);

// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive - fullname vs fullName

// common practice - camelCase or underscore
let random123_$ = "random"
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
