/**
 * Created by ravkrishnan on 3/23/19.
 */



// Destructuring
// Template Literals
// Loops
//


const express = require("express");
const cors = require('cors');
const path = require('path');
const router = express.Router();

/*Unfortunately, Node.js doesn't support ES6's import, export yet.
import video, {play as videoPlay} from './video.js' ;
const vObj = new video('Kids');
vObj.display();
videoPlay();
*/

// libraries
const _ = require ('lodash');
const {user, personObject, getName, getAge} = require('./user');


const app = new express();
app.use(cors());

app.use('/', router);

router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname+'/app.html'));
});

app.listen(4010, ()=> {
    console.log('listening requests on port 4010');
});

console.log(__dirname);
console.log(__filename);
// let time = 0;
// const timer = setInterval(()=> {
//     time+= 2;
//     console.log(`${time} interval`);
//     if ( time >= 10)
//         clearInterval(timer);
//     }, 2000);
//
// console.log(this);
console.log('My first Program');

const myObj = { name : 'ravi'};
myObj.age = 15;
myObj['country'] = 'USA';
let address = `address_${myObj.country}`;
myObj[address] ='Milpitas';

console.log(myObj);

const person1 = { name : 'ganesh', age : 35, sex: 'male'};
const person2 = { name : 'kumar', age : 35, sex: 'male'};
const person3 = { name : 'ram', age : 35, sex: 'male'};

console.table({person1, person2, person3});
//console.log({person1, person2, person3});

// let, const
let value = 10;
const abc = "ram";

let names;  // names is undefined, you can check it using ==
console.log(`names is undefined?: ${names == null}`); // only usecases to check whether it is undefined or not
console.log(abc === "ram");

//ES6

//1. Default value parameter in a function
const getAccounts = function(limit = 20) {
    if (typeof limit == 'undefined') {   // ES5 syntax to fill default value or limit == null check
        limit = 10;
    }
    console.log('Limit value: ' + limit);
}
getAccounts();

// 2. Spread -> spread the array elements into individual elements
// REST - condense the multiple elements into a array.
const student = function(name, age,...subjects) { // here it act as REST
    const print = `${name} ${age} subjects:`; // Template Literals
    console.log(print);
    subjects.forEach(sub => console.log(sub));
}
student('ram', 15, 'tamil', 'english', 'maths', 'science', 'history');

// Spread operator is used for Arrays and Objects(Destructuring)
const firstArr = [1, 2, 3];
const second = [4, 5,6];
const combined = [...firstArr, 0, ...second]; // here it act as spread
console.log(combined);


// 3. Template Literals
const firstName = 'Ravi';
const lastName = 'Kumar';
const name1 = `My name is ${firstName} 
${lastName}
Name ended`;
console.log (name1);

// 4. Object destructuring
const {name} = person1 // getting name alone
console.log(name);

// Array Object Destructuring
const elements = [1,5,10,15,20]
const [first, , third, ...rest] = elements
console.log(`First: ${first} Third: ${third} Others: ${rest}`)

const person = {
    name : 'Ravi',
    age : 25,
    address: {
        city: 'milpitas',
        state : 'CA'
    }
}
const {name :NameAlias, address : {city:cityName}, address:{country = 'USA'} } = person;
console.log(`FirstName: ${NameAlias} UpdatedCity: ${cityName} country : ${country}`);


let salary = [100, 200, 300];
console.log(_.isString(salary));


// Pure functions ( input should not be changed. Output will be same for all the executions with the same inputs )
function addElementToArray(arr, element) {
    return [...arr, element]
}

const array = [1,2,3];
console.log(addElementToArray(array, 4))
console.log(addElementToArray(array, 4))
console.log(addElementToArray(array, 4))

// closure ( Inner functions can access the outer scope values). Any point of time, inner function preserve the values of outer scope values as well.
function addition(element) {
    return function inner(element2) {
        return element + element2;
    }
}

let add5 = addition(5);
console.log(add5(7));
console.log(add5(10));

/* this usage
A object that is executing the current function
A function inside the class is considered as method. this refers current instance object
inside regular function, this refers to window ( browser), global in Node
when you use anonymous functions, you need to bind the this object with the actual object.
if you use arrow function, you dont need to bind it.
https://arunrajeevan.medium.com/understanding-this-keyword-in-javascript-a224a6063452
Note: Arrow functions are the best choice when working with closures or callbacks, but not a good choice when working with class/object methods or constructors.

 */

console.log('this concepts in javascript');
const myFunction = () => {
    console.log('Inside MyFunction')
    console.log(this); // refers empty object {}
}
myFunction();

const regularFunc = function() {
    console.log('Inside RegularFunc');
    console.log(this); // refers {global object}
}
regularFunc();

class Book {
  constructor(title) {
      this.title = title;
  }
  print()  {
      console.log(`Book Name: ${this.title}`)
  }
};
const bookObj = new Book('Javascript');
bookObj.print();

const display = function (){
    console.log(this.name)
};
const personObj = { name : 'ganesh',
    getDisplay: function() {
        console.log(`${this.name}  ${this.age}`);
    },
    getDisplayAfterTimedOut() {
        console.log(this.name);
        setTimeout(displayBind,500);
    },
    age : 35
};

personObj.getDisplay();

let displayBind = display.bind(personObj); // bind
personObj.getDisplayAfterTimedOut();

// call, apply, bind (you want to change the this reference to point to different object)
// A function which can be borrowed for many objects, without even need to create a method in the object
function addNumbers(num2, num3) {
    return this.num1 + num2 + num3;
}

let obj1 = { num1 :10};
let obj2 = { num1 : 20};

console.log(`After Call: ${addNumbers.call(obj1, 20, 30)}`);
console.log(`After apply: ${addNumbers.apply(obj1, [20, 30])}`);

console.log(`After Call: ${addNumbers.call(obj2, 20, 30)}`);

const jobs = [
    { id : 1, isActive : true},
    { id : 2, isActive : false},
    { id : 3, isActive : true }
];

const ActiveJobs = jobs.filter( job => job.isActive );
console.log (ActiveJobs)



class Car {
    constructor (name) {
        this.name = name;
    }
     drive() {
        console.log(`Driving ${this.name}`);
     }
};

class BMW extends Car {
    constructor (name, model) {
        super(name);
        this.model = model;
    }
    speed() {
        console.log(`speed limit 100 ${this.name} ${this.model}`);
    }
}

const carObj = new Car('basic');
carObj.drive();

const bmwObj = new BMW('BMW', '400');
bmwObj.speed();

// callback example
const apiResult = false;

function consolidateResponse( callback, errorCallback) {
    if ( apiResult === true) {
        callback('Success response from API')
    }
    else {
        errorCallback( { name : 'API_FAILURE', message : 'Server error'})
    }
}

consolidateResponse ( (message) => console.log(message),
    (errorObj) => console.log(`${errorObj.name} : ${errorObj.message}`))

// converting callback to promise
function consolidateResponseUsingPromise() {
    return new Promise( (resolve, reject) => {
        if ( apiResult === true) {
            resolve('Success response from API')
        }
        else {
            reject( { name : 'API_FAILURE', message : 'Server error'})
        }
    })
}

consolidateResponseUsingPromise().then( (message) => console.log(message))
    .catch( error => console.log(`${error.name} ${error.message}`))

// Promises
// promise function accepts two arguments. one is resolve and another one is reject.
// p.then will execute resolve function. p.catch will execute reject function
console.log('Promises');

const p = new Promise( (resolve, reject) => {
    let a = 1+1;
    if ( a === 3) {
        resolve('success')
    }
    else {
        reject('failure')
    }
})

p.then( (message) => console.log(message)).catch( (message) => console.log(message))

// Promise all, race

const p1 = new Promise( (resolve, reject) => {
    resolve('p1 promise executed')
})

const p2 = new Promise( (resolve, reject) => {
    resolve('p2 promise executed')
})

// all allows all the promises needs to be completed. messages is an array of all the promises response.
Promise.all([p1, p2])
    .then( messages => console.log(messages))
    .catch( error => console.log(error))

// race - if any one of the promise is completed. it will execute then method
Promise.race([p1, p2])
    .then( message => console.log(message))
    .catch( error => console.log(error))

// Array methods (filter, map, find, forEach(void return type), some, every, reduce, includes)
// some, every returns boolean
// map, transforms one object into another object
// filter, find returns the filtered items or the first item
// reduce returns cumulative values, includes returns boolean value

console.log('Array Helper methods');
const numbers = [1, 2, 3];
numbers.splice(3, 0, 4,5); // add elements
numbers.splice(1,1, -2); // replace
numbers.splice(1,1); // delete
numbers.splice(2);
console.log(numbers);


const items = [
    {name : 'pen', price : 35},
    {name : 'pencil', price : 20},
    {name : 'toy' , price : 100},
    {name : 'book', price : 50}
]

const filteredItems = items.filter( (item) => item.price > 50)
console.log(`Filtered Items: ${JSON.stringify(filteredItems)}`);

const listItems = items.map( (item) => item.name)
console.log(`Names List: ${listItems}`);

const findItem = items.find( (item) => item.price === 50)
console.log(`Find Item: ${JSON.stringify(findItem)}`);

items.forEach( (item) => console.log(item))

const expansiveItems = items.some( (item) => item.price > 50)
console.log(`Expansive Item: ${expansiveItems}`);

const InExpansiveItems = items.every( (item) => item.price <= 100)
console.log(`InExpansive Item: ${InExpansiveItems}`);

const values = ['ram', 'ganesh', 'vinoth']
console.log(`Incude returns ${values.includes('ganesh')}`);

const sum = items.reduce ( (initTotal, item) => {
    return item.price + initTotal;
}, 0)
console.log(`Total Sum: ${sum}`);

const TotalSum = items.filter( (item) => item.price > 30).reduce( (total, item) => total + item.price, 0)
console.log(`Total Sum : ${TotalSum}`);

// ES6 modules (require and exports)
console.log('Exports and require');
const UserObj = new user('ganesh', 30);
getName(UserObj);
getAge(UserObj);
personObject.displayName();



// import export
// import React { Component} from 'react'; Named Export: { Component} , Default Export : React
 // export default
// export - Named Export


const bill = (products, tax) => {
    return products.reduce( (total, product) => product+ (product* tax) +total, 0);
}
console.log(bill([10,15,30], 0.2));

/* Promise, async, await
async await - syntactic sugar on top of promise
nested then calls can be avoided using async
 create a function as async function and write async code with await statement
 */
function makeRequest(request) {
    return new Promise( (resolve, reject) => {
       if ( request === 'Google')
           resolve(`Request received from ${request}`);
       else
           reject(`unable to make request to ${request}`);
    });
}

function processResponse(response){
    return new Promise( (resolve, reject) => {
        resolve('success process Response');
    })
}

// makeRequest('Google').then (response => {
//     console.log(response);
//     return processResponse(response);
// }).then( resp => console.log(resp))
//     .catch( err => console.log(err));

async function doMakeRequest() {
    try {
        const response = await makeRequest('Google')
        console.log(response)
        const processedResponse = await processResponse(response)
        console.log(processedResponse)
    }
    catch (err) {
        console.log(err)
    }
}
doMakeRequest();

/*
export, import
module.exports and require
you should have only one default export
standard export, add the keyword before the function

 */