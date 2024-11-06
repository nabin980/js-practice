'use strict'

// function calcAge(birthYear){
//     const age = 2024 -birthYear;
//     return age;
// }

// console.log(calcAge(2000));

// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'jonas';
// let me = 'teacher'
// const year = 1991;  

// console.log(add(2,3)) ;

// function add(a,b){
//     return a + b;
// }

// this

// console.log(this);

// function calcAge(birthYear){
//        console.log(2024 -birthYear);
//         console.log(this)
// }
// calcAge(1995);

// const calcAgeArrow = (birthYear) =>{
//     console.log(2024 -birthYear);
//      console.log(this)
// }
// calcAgeArrow(1999);

// const jonas = {
//     year : 1999,
//     calcAge: function(){
//         console.log(this);
//         console.log(2024-this.year)
//     }
// }

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// f();

// const jonas = {
//     firstName: 'jonas',
//     year : 1999,
//     calcAge: function(){
//         // console.log(this);
//         console.log(2024-this.year)

//         // solution one for this undefined
//         // const self = this;
//         // const isMellenial = function(){
//         //     // wrong
//         //     // console.log(this.year >= 1981 && this.year<=1996);
//         //     console.log(self.year >= 1981 && self.year<=1996);
//         // };

//        //solution 2 use arrow function it uses this from parent 
//         const isMellenial = () =>{
//             console.log(this);
//             console.log(this.year >= 1981 && this.year<=1996);
//         };
//         isMellenial();
//     },
//     greet: () => console.log(`hey ${this.firstName}`),
// }

// // jonas.greet();
// jonas.calcAge();


// // argument keywords don't exists in arrow function
// const addExpr = function (a,b){
// console.log(arguments);
// return a + b;
// }

// how primitive and objects are stored in memory

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me ={
    name: 'jonas',
    age:30,
};

const friend = me;
friend.age = 27;
console.log('Friend:',friend);
console.log("me:",me);

const jesica = {
    firstName : 'jessica',
    lastName : 'williams',
    age: 27,
    family: ['Alice', 'Bob']
}

const jesicaCopy = Object.assign({}, jesica); // make a new object in heap only shallow copy not deep copy
jesicaCopy.lastName = 'davis';
console.log('Before:' ,jesica); // .assign keep before same and change after only
console.log("after:",jesicaCopy);

jesicaCopy.family.push('mary'); // nested object like family when changed before and after changed so we need deep clone
jesicaCopy.family.push('john');
console.log('Before:' ,jesica);
console.log("after:",jesicaCopy);
