/**
 * Created by ravkrishnan on 3/23/19.
 */

// Destructuring
// Template Literals
// Loops
//
const express = require("express");

const _ = require ('lodash');


console.log('My first Program');

const person1 = { name : 'ganesh', age : 35, sex: 'male'};
const person2 = { name : 'kumar', age : 35, sex: 'male'};
const person3 = { name : 'ram', age : 35, sex: 'male'};

console.table({person1, person2, person3});
//console.log({person1, person2, person3});

// let, const
let value = 10;
const abc = "ram";

let names;
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

// 2. REST and Spread operator for unlimited arguments
const student = function(name, age,...subjects) {
    const print = `${name} ${age} subjects:`; // Template Literals
    console.log(print);
    subjects.forEach(sub => console.log(sub));
}
student('ram', 15, 'tamil', 'english', 'maths', 'science', 'history');

// Spread operator is used for Arrays and Objects(Destructuring)
const firstArr = [1, 2, 3];
const second = [4, 5,6];
const combined = [...firstArr, 0, ...second];
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

// this usage
// A function inside the class is considered as method. this refers current instance object
// inside regular function, this refers to window ( browser), global in Node
// when you use anonymous functions, you need to bind the this object with the actual object.
// if you use arrow function, you dont need to bind it.
const display = function (){
    console.log(this.name)
}
const personObj = { name : 'ganesh',
    getDisplay() {
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
// A function which can be borrowed for many objcts, without even need to create a method in the object
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


// import export
// import React { Component} from 'react'; Named Export: { Component} , Default Export : React
 // export default
// export - Named Export




