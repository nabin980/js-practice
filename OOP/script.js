'use strict';

// const Person = function (fullName,birthDate){
//  this.Username = fullName;
//  this.birthday = birthDate;

//  //Never do this
// //  this.calcAge = function(){
// //     console.log(2037-this.birthday)
// //  }
// };

// const jonas = new Person('jonas', 1991);
// console.log(jonas);

// //1. New empty object{} is created
// //2. function is called, this = new obj{}
// //3.{} linked to prototype
// //4. fuction automaticallly returns {}

// const matilda = new Person('matilda',2000);
// const rama = new Person('rama',1923);
// console.log(matilda,rama);

// console.log(matilda instanceof Person);

// // Prototypers

// console.log(Person.prototype);

// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthday);
// }

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species,matilda.species);
// console.log(jonas.hasOwnProperty('Username'));
// console.log(jonas.hasOwnProperty('species'));

// const arr = [3,6,6,5,6,9,9];

// Array.prototype.unique = function(){
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// challenge coding 1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/


// const CAR = function(make,speed){
//     this.make = make;
//     this.speed = speed;
// };

// const bmw = new CAR('BMD', 120);
// const mercedes = new CAR('Mercedes', 95);

// CAR.prototype.accelerate = function(){
//  this.speed += 10 ;
//  console.log(`${this.make} is going at ${this.speed}`);
// }
// CAR.prototype.brake = function(){
//     this.speed -= 5 ;
//     console.log(`${this.make} is going at ${this.speed}`);
//    }

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// bmw.accelerate();


/// Class Expression
// const PersonCL = class{}

/// Class Decleration
// class PersonCl{
//  constructor(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//  }

 // Methods will be added to .prototype property
//  calcAge(){
//     console.log(2037 - this.birthYear);
//  }

//  greet(){
//     console.log(`Hey ${this.firstName}`)
//  }
// }

// const jesica = new PersonCl('Jessica', 1996);
// console.log(jesica);
// jesica.calcAge();

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }

// jesica.greet();
// 1. Classes are not hoisted first need to declear to call function
// 2. Class are firest-class cizizes
// 3. Classes are executed in strict mode



/// Getter and Setters
const account = {
    owner : 'Jonas',
    movments : [200,530,120,300],


    // GEtter
    get latest(){
        return this.movments.slice(-1).pop();
    },

    // Setter
    set latest (mov){
        this.movments.push(mov);
    }
}

console.log(account.latest);
account.latest = 50;
console.log(account.movments);