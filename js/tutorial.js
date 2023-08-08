// Javascript

// 1. Interpreted language
// 2. slower than native/compiled languages (webassembly added to increase speed)
// 3. dynamic: a JS variable can take different types - number, string, array, object, boolean
// 4. Garbage-collected (Memory is managed for you)
// 5. The most popular language
// 6. Javascript (frameworks) can also be used to create mobile and desktop applications
// 7. A prototyped-based language. Others include object-oriented programming with classes, functional programming, procedure 
// 8. White space does matter much
// What out for semicolons and new lines
// 9. JavaScript has keywords that you cannot use as variables/function names
// https://www.w3schools.in/javascript/keywords/
// 10. JS is case-sensitive. Age and age are not the same. a and A.

// let age = 10;

// console.log(typeof age);

// age = "Mark";

// console.log(typeof age);

// age = 2.2

// console.log(typeof age);


// age = [1, 2, 3]

// console.log(Array.isArray(age));


// Outline

// Comment
// Variables
// Data types and operators
// Data Structures
// Control flow
// functions
// Errors
// Classes

// class Person {

//     name;
//     age;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     walk() {
//         console.log('I am walking');
//     }

//     talk() {
//         console.log('I am talking');
//     }
// }

// var mark = new Person('Mark Edosa', 300);

// var john = new Person('John Doe', 455)

// console.log(mark);

// console.log(john);

// mark.walk()
// mark.talk()


// Prototyped based
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.walk = function () {
//     console.log('I am walking')
// }

// Person.prototype.talk = function () {
//     console.log('I am talking');
// }


// var mark = new Person('Mark Edosa', 300);

// var john = new Person('John Doe', 455)

// console.log(mark);

// console.log(john);

// let a = mark.walk()
// let b = mark.talk()


// mark.walk().talk()

// walk(talk(mark))
// const numbers = [1, 2, 3, 4, 5]

// function greaterThanOrEqualsThree(num) {
//     return num >= 3;
// }

// function square(num) {
//     return num * num
// }

// const result = numbers
//     .filter(greaterThanOrEqualsThree)
//     .map(square)


// console.log(numbers);
// console.log(result);

// White space does not matter much
// use semicolons to avoid mistakes with new lines.
// let num     = 5;
// console.log('mark');

// console.log(num);

// ================== COMMENTS ====================

// single line comment


/* 
Multiple line comments
this is line 1
This is line 2
This is line ...
This is line n
*/


// =================== VARIABLES AND CONSTANTS ========================

// var age = 13;
// let height = 34;
// const width = 10;

// // var does not respect scopes / blocks

// {
//   var amount = 15;
// }

// console.log(age);
// console.log(amount);

// // let and const respects blocks/scope.
// // Examples of blocks/scopes: {}, if block, function blocks, loop blocks
// {
//     let height2 = 24;
//     const width2 = 25;

//     console.log(height2);
//     console.log(width2);
// }

// console.log(height);
// // console.log(height2); fails or reference error

// console.log(width);
// // console.log(width2); fails or reference error

// // You can't reassign to a const variable
// // width = 40;

// // The default value is undefined
// // when you don't assign a value upon variable declaration
// let name;

// // const rate; error

// console.log(name);
// console.log(typeof name);

// name = "Jerry";

// console.log(name);
// console.log(typeof name);

// // Declare multiple variables in one line
// let a, b, c;

// let d = 4, e = 5, f = 6;
// const hot = 'fire', cold = 'ice';

// console.log(a, b, c);
// console.log(d, e, f);
// console.log(hot, cold);


// // More on variable scoping
// // global scope
// let temperature = 50;

// function printTemp() {
//     a local environment / scope
//     local temperature
//     let temperature = 20;

//     global temperature
//     temperature = 100;

//     console.log(temperature);
// }


// function printTemp2(temperature /* local temperature */ ) { 
//     // local temperature
//     console.log(temperature);

//     temperature = 80;

//     console.log(temperature);
// }

// printTemp() 
// // printTemp2()

// console.log('global temperature');
// console.log(temperature);


// variable naming Pascal, Camel, Snake

// pascal
// const WordProgrammer = false;

// camel
// wordProgrammer

// snake casing
// word_programmer

// class names: use pascal e.g PersonAddress {}
// variable and function names: (camel case) or snake case

// console.log();
// console.log();
// console.log();

// // Tasks
// // create three variables using let

// let fruit = "orange";  
// let vehicle = "car";
// let food = "fried bean";

// // create two variables using const

// const place = "lagos";
// const metal = "lead";

// // Using let, declare four variables in one line.

// let school, book, rule;

// // Using const declare four variables in one line

// const digit = 1, alphabet = "a", line = "straight", motion = "random"; 

// // What is the value of person in the function below


// let person = 'John Doe';
// let address = 'Navy Street';

// function printPerson() {
//     let person = "Mary Joe";

//     console.log(person);

//     address = "Army Barracks";
// }

// printPerson();

// console.log(person)
// console.log(address)


// Solution to the task


// ================ DATA TYPES =======================
const log = console.log;

// numbers e.g, 5, 2.34 (float, double)
// strings
// booleans
// undefined
// null

// definition
// operation
// built-in methods/functions available

// ==================== Numbers ==================
// integers and floats

// const age = 400;
// const weight = 72.4;

// log(typeof age);
// log(typeof weight);

// log(Number.isInteger(age))
// log(Number.isInteger(weight))

// log(age + 10);
// log(age - 16);
// let ageTimesFive = age * 5;
// log(ageTimesFive)
// console.log(age / 2);
// log(age % 2);
// console.log(5 % 2);
// console.log(7 % 4);
// log(7 / 4)
// log('I am here')
// log((7 / 4) === 1.75)
// // log((10 / 3) === 3.333333)
// log(2**2) two raised to power two

// +=, -=, *=, /= %=
// let a = 2;

// a = a + 1;
// a += 1

// a *= 5;

// // BODMAS
// log(2 + 4 * 3)
// log((2 + 4) * 3)

// // conversion

// let notANumber = "some";
// let aNumber = "23.56";
// let anotherNumber = "200";

// console.log(typeof notANumber, typeof aNumber, typeof anotherNumber);

// notANumber = Number.parseInt(notANumber);
// aNumber = Number.parseFloat(aNumber);
// anotherNumber = Number.parseInt(anotherNumber);

// console.log(typeof notANumber, typeof aNumber, typeof anotherNumber);
// console.log(notANumber, aNumber, anotherNumber);

// log(Number.isNaN(notANumber));

// log(age.toString(), typeof age.toString());

// log(Number.toString(5))

// // you want to do this
// log(2 + '8');
// // js does this
// log('2' + '8')
// // Do this instead
// log(2 + Number.parseInt('8'))

// // Math functions
// log(Math.sin(age));
// log(Math.sqrt(age));
// log(Math.random());
// log(Math.max(14, 2, 8, 19))
// console.log(Math.floor(aNumber));
// console.log(Math.ceil(aNumber));

// log(Math.round(aNumber))
// log(Math.fround(aNumber))
// log(Math.PI)



// ====================  Strings ========================

// define
// operations
// methods

// const firstName = "John";
// const lastName = "Doe";
// const sentence = "My name is";
// const empty = "";

// let fullName;

// log(firstName);
// log(lastName)
// log(sentence);

// // operations
// log(firstName.length)
// console.log(sentence.length);

// fullName = firstName + ' ' + lastName;

// log(fullName);

// log("firstName lastName");


// // string interpolation
// // It helps you evaluate variables within strings
// const fullNameAgain = `${firstName} ${lastName}`;
// log(fullNameAgain);

// const age = 400;

// log(`${sentence} ${firstName} ${lastName} and I am ${age / 20} years old`);

// // string
// // String.
// // log('a' > 'A')
// // google unicode characters
// // log(String.fromCharCode(65))
// // log('A'.charCodeAt())

// // string methods
// const maryDoe = fullName.replace('John', 'Mary');
// log(maryDoe)
// log(fullName);

// const nameSplits = fullName.split(' ');
// log(nameSplits)
// log(nameSplits[0]);
// log(nameSplits[1])

// // You can select individual string characters
// // using their index
// console.log(fullName[0]);

// const statement = "my name is john";

// const firstLetter = statement[0].toUpperCase();
// log(firstLetter);

// log(statement.substring(3, 7))

// const titledStatement = firstLetter + statement.substring(1);
// log(titledStatement);


// log(titledStatement.startsWith('My'));
// log(titledStatement.startsWith('Boy'));
// log(titledStatement.endsWith('q'));
// log(titledStatement.endsWith('n'));

// log(titledStatement.includes('name'));
// console.log(titledStatement.includes('s'));
// console.log(titledStatement.includes('q'));

// log(titledStatement.toUpperCase());
// log(fullName, ',', fullName.toLowerCase());

// // log("=".repeat(10))

// function betterLog(...args) {
//     const delimiter = "=".repeat(10);
//     log(delimiter)
//     log(...args);
//     log(delimiter);
// }

// function commentLog(param) {
//     const delimiter = "=".repeat(10);
//     log(`${delimiter} ${param} ${delimiter}`);
// }

// betterLog(titledStatement);
// commentLog(2 + 2);

// const manySpaces = "     nameDoe   ";
// const cleanedManySpaces = manySpaces.trim()

// log(manySpaces);
// log(cleanedManySpaces);

// commentLog(manySpaces.trimStart());
// commentLog(manySpaces.trimEnd());

// log('my'.padStart(10, '1'));



// =================== Booleans ==================== 

// const isTall = false;
// const isShort = true;

// log(isTall);
// log(isShort);

// const name = "Lois Lane";
// const isLois = name === "Lois Lane";

// log(isLois);

// const num1 = 10;
// const num2 = 15;

// // comparison operators
// // equals (==, === ), >, <, >=, >=, <=, <=, !, !==, !=
// log(num1 === num2);
// log(num1 > num2);
// log(num1 < num2);
// log(num1 <= num2);
// log(num1 >= num2);

// log(!isLois);

// log(num1 !== num2);

// // logical operators
// // &&, ||

// // Truth Table (AND) &&
// // true and true = true
// // true and false = false;
// // false and true = false;
// // false and false = false

// // Truth Table (OR) ||
// // true or true = true
// // true or false = true;
// // false or true = true;
// // false and false = false

// log(isTall && isShort);
// log(isTall || isShort);

// // short circult operators

// function printHello(name) {
//     log('Hello ' + name);
// }

// printHello('John Doe');

// // right (true) && run left hand side
// // right (false) && don't run left hand side
// isLois && printHello(name);

// if(isLois) {
//     printHello(name);
// }

// isTall && printHello('Tall Guy');

// if(isTall) {
//     print('Tall Guy');
// }

// // right (true) && ignore left
// // right (false) && run left hand side
// log(isShort || isTall);
// log(isTall || isShort);

// isTall || printHello('Mark');
// isShort || printHello('Mark');


// =================== DATA STRUCTURES ======================

// Array
// Object
// Set
// Map
// WeakMap
// WeakSet


// Array
// const food = ['rice', 'beans', 'eggs', 'tomatoes', 'plantain'];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrFromString = "Mybook,MyBiro".split(',');
// const arrFromArrayObject = Array(10);
// const emptyArr = [];


// log(food);
// log(numbers);
// log(arrFromString);
// log(arrFromArrayObject);
// log(emptyArr);

// // properties and operations
// log(food.length);
// log(arrFromArrayObject.length);

// // indexing
// log(food[0]);
// log(arrFromString[1]);

// // type
// log(typeof food);
// log(Array.isArray(food)); // use this

// // modify array
// food[0] = "Swallow";
// console.log(food);

// // adding / modifying areas using concat
// const newArr = food.concat(numbers);
// log(newArr);

// // using spread operator
// log([...food, ...numbers]);


// // // Destructuring an array
// // Get the elements of an array by its index position
// // and store in a variable.
// log(arrFromString);
// const [book, biro] = arrFromString;

// log(book);
// log(biro);

// const [first, second, third, ...restNumbers] = numbers;

// log(first, second, third);
// log(restNumbers);

// // we skip positions
// const [one, two, ,  , five, ...restValues] = numbers;

// log(one, two, five);
// log(restValues);

// // Array Methods

// const cubeNumbers = numbers.map(function(num) {
//     return num**3;
// });

// log(cubeNumbers);

// const oddNumbers = numbers.filter(function(num) {
//     return num % 2 !== 0;
// });

// log(oddNumbers);

// const evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// log(evenNumbers);

// food.forEach(function(item) {
//     log(item);
// });

// log(food);

// function sendMessage(email) {
//     log('Sending message to ' + email);
// }

// const emails = ['medosa185@gmail.com', 'abc@example.com', 'test@example.com'];

// emails.forEach(function(email) {
//     sendMessage(email);
// })


// let result = numbers.every(function(num) {
//     return num > 0;
// });

// log(result);

// result = numbers.some(function(num) {
//     return num > 15;
// });

// log(result);

// const r = food.find(function(item) {
//     return item === 'eggs';
// });

// const y = food.find(function(item) {
//     return item === 'yam';
// });

// log(r);
// log(y);

// const greaterThanThree = food.find(function(item) {
//     return item.length === 5;
// })

// log(greaterThanThree);

// log(food.indexOf('beans'));
// log(food.indexOf('plantain'));

// log(food[4]);

// log(food.includes('eggs'));
// log(food.includes('carrot'));

// // add items to the end of an array using push
// food.push('Banana');
// log(food);

// food.push('Cabbage');
// log(food);

// // use pop to remove the element at the end of an array
// const cabbage = food.pop();
// log(cabbage);
// log(food);

// food.pop();

// log(food);

// // use shift to remove the element at the beginning of an array
// food.shift();
// log(food);

// // add items to the end of an array using unshift
// food.unshift('Bons')
// log(food);

// log(arrFromArrayObject);

// arrFromArrayObject.fill(0);

// log(arrFromArrayObject);

// log(food.join(','))
// log(numbers.join('+'));

// log(numbers.slice(4, 8));

// Home Task
// Use four other Array methods that I didn't use.


// Objects

// const person = {
//     name: 'John Doe',
//     age: 34,
//     height: 1.7,
//     occupation: 'Programmer',
//     walk() {
//         log("I am walking")
//     },
//     properties: ["book", 'pen', 'artworks', 'others']
// }

// log(typeof person);
// log(person);


// // access
// log(person.name);
// log(person.age);
// log(person.walk)
// log(person.walk())
// log(person.properties);

// log(person['name']);
// log(person['age']);

// const item = 'height';
// log(person[item]);
// log(person['height']);

// log(person.item) // undefined

// // modification
// person.talk = function () {
//     log("I am talking");
// }

// person.shoeSize = 45;

// person['isMarried'] = false;

// person.talk();
// log(person.shoeSize);
// log(person.isMarried);

// delete person.properties;

// log(person);

// // Methods
// log(Object.keys(person));
// log(Object.values(person));
// log(Object.entries(person));

// const obj = Object.fromEntries([['isStupid', false], ['IsTall', true]]);
// log(obj);

// // Prevent modification or delete
// log('before freezing');
// Object.freeze(person);

// log('after freezing');

// person.smiling = false;
// delete person.age;

// log(person);
// log(Object.isFrozen(person));

// // Object Destructuring
// const { name, age, occupation } = person;

// log(name);
// log(age)
// log(occupation);


// function printAgeAndName(person) {
//     log('printing name and age')
//     log(person.name);
//     log(person.age);
// }

// // function printAgeAndName2({ name, age }) {
// //     log('printing name and age')
// //     log(name);
// //     log(age);
// // }
// // printAgeAndName2(person);
// printAgeAndName(person);



// // Task
// // create an array with five items

// const roomItems = ["chair", "table", "fan", "glass", "door"]
// console.log(roomItems)

// // pop the last item

// const lastitem = roomItems.pop();
// console.log(lastitem);

// console.log(roomItems)

// // push an item into the array

// roomItems.push("bed");
// console.log(roomItems)

// // check the length of the array

// log(roomItems.length)

// // filter the array

// let result = roomItems.filter(function(item){
//     return item.includes("a")
// })
// console.log(result);


// // map

// result = roomItems.map(function(item){
//     return item.length;
// })
// console.log(result);

// // object
// // using the bracket syntax add property education to 'Masters'
// const person2 = {...person}; // copy

// person2["education"] = "Masters"

// console.log(person2);

// // using the dot notation, set hobby to 'playing football'

// person2.hobby = "playing football"
// log(person2)

// // log all the person object keys, and values

// log(Object.keys(person2))

// log(Object.values(person2))

// log(Object.entries(person2))

// // delete shoeSize property

// delete person2.shoeSize;

// console.log(person2);


// // Set a height variable using destructuring
// const { height } = person2;
// console.log(height);


// // Referencing
// const person3 = person2;

// log('This is person 3')
// log(person3);

// person3.education = "Ph.D";

// log('This is person 2 now')
// log(person2)


// const arr1 = ['dog']
// const arr2 = arr1; // referencing
// const arr3 = [...arr1]; // copying

// arr1.push('goat')

// log(arr2);
// log(arr1);

// log(arr3)


// // CONTROL FLOW
// // if statements, switch statements, for loops, while leaps
// // Truthy statements: 1, [], {}, true
// // falsy values: 0, "", undefined, null, NaN

// const age1 = 30;
// const age2 = 45;

// // if statement
// if(age1 > 30){
//    log('I am older than 30 years')
// }

// // if else
// if(age1 > 30){
//    log('I am older than 30 years')
// } else {
//     log('I am either 30 years old or below')
// }

// // if elseif else
// if(age1 > 30){
//    log('I am older than 30 years')
// } else if(age2 >= 45) {
//    log('I am either 45 years old or older')
// } else {
//     log('I am either 30 years old or below')
// }


// // for very many conditions, consider using a switch statement

// // if() {

//     // } else if() {

//         // } else if() {

//             // } else if() {

//                 // } else if() {

//                     // } else {

//                         // }

// const letter = 'd';

// switch (letter) {
//     case 'a':
//         log('The letter is a')
//         break;
//     case 'b':
//         log('The letter is b')
//         break;
//     case 'c':
//         log('The letter is c')
//         break;
//     case 'd':
//         log('The letter is d')
//         break;
//     case 'e':
//         log('The letter is e')
//         break;
//     default:
//         log('I dont\'t understand you')
//         break;
// }


// // for loops and while loops
// const letters = 'a b c d e f g'.split(' ');
// log(letters)

// // for(set index; condition; increment){

// // }

// for (let index = 0; index < letters.length; index++) {
//     log(letters[index]);
// }

// // log('Index jumps out with var', index);

// log('')

// // for-of loop for arrays/strings
// for (const lt of letters) {
//     log(lt);
// }

// // for-in for objects
// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         log(key, ':', person[key])
//     }
// }

// log('')

// Object.keys(person).forEach(function(key) {
//     log(key, ':', person[key]);
// });

// log('');

// // break and continue
// for (let index = 0; index < letters.length; index++) {
//     let letter = letters[index];
//     log(letter);
//     if(letter === 'd') break; // stop loop
// }

// log('');

// // break and continue
// for (let index = 0; index < letters.length; index++) {
//     let letter = letters[index];
//     if(letter === 'd' || letter === 'e') continue; // skip step
//     log(letter);
// }


// let counter = 0;

// while(counter !== 10) {
//     log(counter);
//     counter += 1;
// }

// log('Counter is now', counter);

// counter = 0;

// log('');

// // skip all odd numbers
// // break when counter is 14
// while(counter !== 20) {
//     if(counter % 2 === 0) {
//         log(counter);
//     } else {
//         counter += 1;
//         continue;
//     }
//     if(counter === 14) break;
//     counter += 1;
// }



// Functions

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];


// function square(number) {
//     const result = number * number;
//     return result;
// }

// store a define a variable that is a function
let square = function (number) {
    const result = number * number;
    return result;
}

log(square(40));
// log(square.name);

arr = arr.map(square)

log(arr)

arr2 = arr2.map(square)

log(arr2)

arr3 = arr3.map(square)

log(arr3)

// anonymous functions

log('anonymous function', arr3.map(function (n) {
    return n * n;
}));

// array functions

let arrowFunction = (n) => {
    return n * n;
}

arrowFunction = n => n * n;

log(arr.map(arrowFunction));


// you can shorten simple arrow functions
arr3.map(n => n * n);


// Function parameters
function sum(num1, num2) {
    return num1 + num2;
}

log(sum(10, 4));

log(sum(10));

function sum2(num1=5, num2=10) {
    return num1 + num2;
}

log(sum2(34, 6));
log(sum2(34));
log(sum2())

function printMe() {
    log('Me')
}

printMe();

function sumOfFirstN(n = 100) {
    if (n <= 0) {
        alert('Your value shouldn"t be zero or less')
        return 0;
    }
    
    let total = 0;
    while(n !== 0) {
        total += n; // total = total + n
        n -= 1; // n = n - 1
    }
    return total;
}

function sumOfFirstNShort(n = 100) {
    if (n <= 0) {
        alert('Your value shouldn"t be zero or less')
        return 0;
    }
    const total = (n * (n + 1)) / 2;
    return total;
}

log(sumOfFirstN());
log(sumOfFirstNShort());

// console.log(sumOfFirstN(0));

log(sumOfFirstNShort(48));


function trueSum(...numbers) {
    log(numbers);
    let total = 0;

    numbers.forEach(n => {
        if (typeof n === 'number') {
            // total += n;
            total = total + n;
        } else if(typeof n === 'string') {
            n = Number.parseInt(n);
            if (! Number.isNaN(n)) {
                total += n;
            }
        }
        log('total is now', total);
    })
    
    return total;
}

log(trueSum(6, 6, 7, 7, 8, 9, 9, 7, 9, 2))

log(trueSum(5, 5, "were", "you", '1', '2', 10, 2));


console.time()
log(sumOfFirstN(1_000_000_000))
console.timeEnd()

console.time()
log(sumOfFirstNShort(1_000_000_000))
console.timeEnd()


// DOM MANIPULATION WITH JS















































