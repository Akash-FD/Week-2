// Array : to store multipale value (any types of )

const array = [1,2,3,4,5]


// create an array using new keyword

const car = new Array("bmw", "audi", "porse")  // not recommanded
console.log(car);


// converting array to string using toString() method 

const num = ["ak","nm"]
let b = num.toString()      // toString() do not modify original array
console.log(b);
console.log(num);

console.log(typeof num);

//------------

// const person = [2];             // exception it will run but length of this array is only 1 (which is incilize)
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46; 
// console.log(person);
// console.log(person.length);

//-----------join---------

let a = [1,2,3,4]
a.push(5)
console.log(a);

console.log(a.at(2));


const myArr = [1, 2, 3, 4, 5, 6];
myArr[2] = 10
console.log(myArr);

console.log({} == {});
console.log((5 + 2) * 4 / 2);








