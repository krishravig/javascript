// Array

const arr = [];
arr.push(2);
arr.push(4);
arr.push(6);
arr.push(8);

console.log(typeof arr);
const num = 5;
console.log(typeof num);
for ( let i = 0; i < arr.length; i++)
    console.log(arr[i]);

arr.forEach( (item, index) => console.log(`Value: ${item} Index: ${index}`));

for ( const item of arr)
    console.log(item);

console.log(`popped element from array: ${arr.pop()}`);

arr.unshift(1);

arr.shift();

// Extraction slice(start_idx, end_idx) left inclusive, right exclusive
// - means from right to left
let subArray = arr.slice(1, 4);
console.log(subArray);
console.log(arr);
let lastTwo = arr.slice(-3, -1);
console.log(lastTwo);

/* splice ( start_idx, num of elements to be removed,  add elements)
update in the array, deletion and replace
 */
arr.splice(1, 2, 3);
console.log(arr);

// Hashset ( add, delete, has, set.keys())

const set = new Set();
set.add('ram');
set.add({ name : 'vinoth', age : 25});
console.log(`set contains value: ${set.has('ram')}`);

//set.delete('ram');
console.log(set.size);

for ( const item of set) {
    console.log(item);
}

const values = Array.from(set.keys());
console.log(values);
set.forEach( item => console.log(item));

// Map ( add, update, delete, get)
const map = new Map();
map.set('ram', 10);
map.set('vinoth', 50);

map.set('ganesh', 25);
map.set('ganesh', 45); // update
map.delete('ram');

console.log(`Map size : ${map.size}`);

for ( const item of map.keys())
    console.log(`Map key: ${item}`);

for ( const item of map.values())
    console.log(`Map Value: ${item}`);


const obj = { name: 'ganesh'};
map.set(obj, {job: 'engineer'});


console.log(map.get(obj));

for ( const item of map) {
    console.log(`Key : ${item[0]} Value : ${item[1]}` );
}

/*
Use instanceof for complex built in types:
Use typeof for simple built in types:
Use instanceof for custom types:
[] instanceof Array; // true
typeof []; //object
/regularexpression/ instanceof RegExp; // true
typeof /regularexpression/; // object

Map vs Object:
key in Object must be primitive types. in Map, it could be anything.
order is preserved in map
Map is instance of Object.
Object.create - create a new instance and inherit the existing object
 */
let bc;
console.log(typeof bc);
