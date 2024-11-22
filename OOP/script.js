'use strict';

// const Person = function (fullName,birthDate){
//  this.Username = fullName;
//  this.birthday = birthDate;

// //  //Never do this
// // //  this.calcAge = function(){
// // //     console.log(2037-this.birthday)
// // //  }
// };

// const jonas = new Person('jonas', 1991);
// console.log(jonas);

//1. New empty object{} is created
//2. function is called, this = new obj{}
//3.{} linked to prototype
//4. fuction automaticallly returns {}

// const matilda = new Person('matilda',2000);
// const rama = new Person('rama',1923);
// console.log(matilda,rama);

// console.log(matilda instanceof Person);

// Person.hey = function(){
//     console.log('Hey There 👋')
// }

// Person.hey();

// Prototypes

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
//  constructor(fullName,birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//  }

// Methods will be added to .prototype property
//  calcAge(){
//     console.log(2037 - this.birthYear);
//  }

//  greet(){
//     console.log(`Hey ${this.firstName}`)
//  }

//  get Age(){
//     console.log(2037-this.birthYear)
//  }

// set a property that already exists
//  set fullName(name){
//     if(name.includes(' ')){
//         this._fullName = name;
//     } else {
//         alert(`${name} is not full name`)
//     }
//  }

//  get fullName(){
//     return this._fullName;
//  }

// Static Methods
//  static hey(){
//     console.log(`Hey there 👋`);
//  }

// }

// PersonCl.hey();

// const jesica = new PersonCl('Jessica Walson', 1996);
// console.log(jesica);
// jesica.calcAge();
// jesica.Age;

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }

// const walter = new PersonCl('Walter Smith', 1882);

// jesica.greet();
// 1. Classes are not hoisted first need to declear to call function
// 2. Class are firest-class cizizes
// 3. Classes are executed in strict mode

// /// Getter and Setters
// const account = {
//     owner : 'Jonas',
//     movments : [200,530,120,300],

//     // GEtter
//     get latest(){
//         return this.movments.slice(-1).pop();
//     },

//     // Setter
//     set latest (mov){
//         this.movments.push(mov);
//     }
// }

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movments);

// Object.create

// const PersonProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear);
//      },

//      setInfo(firstname,birthYear){
//         this.firstName= firstname;
//         this.birthYear= birthYear;
//      },
// }

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven'
// steven.birthYear = '2002';
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.setInfo('Sarah', 1991);
// sarah.calcAge();

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CARCl {
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     };

//   accelerate (){
//      this.speed += 10 ;
//      console.log(`${this.make} is going at ${this.speed}`);
//     }

//    brake(){
//         this.speed -= 5 ;
//         console.log(`${this.make} is going at ${this.speed}`);
//        }

//     get speedUs(){
//         return this.speed / 1.6;
//     }

//     set speedUs(speed){
//          this.speed = speed * 1.6;
//     }

// }

// const ford = new CARCl('Ford', 120);
// ford.speedUs;

// ford.speedUs = 50;
// // console.log(ford);

// // Inheritance between two classes using "Constructor"
// const Person = function (firstName,birthYear){
//  this.firstName = firstName;
//  this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear);
// }

// const Student = function(firstName,birthYear,course){
//     Person.call(this, firstName,birthYear);
//     this.course = course;
// }

// // Linking Protoype child and parent
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName} and i study ${this.course}`)
// }

// const mike = new Student('Mike', 2001,'computer science');
// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const CAR = function(make,speed){
//         this.make = make;
//         this.speed = speed;
// };

// const EV = function(make,speed,battery){
//     CAR.call(this, make, speed);
//     this.battery = battery;
// };
// EV.prototype = Object.create(CAR.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//   this.battery = chargeTo;
// };

// EV.prototype.accelerate= function(){
//     this.speed +=20;
//     this.battery --;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.battery}%`);
// };

// const tesla = new EV('Tesla', 140,23);
// tesla.chargeBattery(90);
// console.log(tesla)
// tesla.accelerate();
// tesla.accelerate();

// Inheretance In CLass : ES6 classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //  Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get Age() {
//     console.log(2037 - this.birthYear);
//   }

//   //  set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not full name`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //  Static Methods
//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce(){
//     console.log(`My Name is ${this.fullName} and I study ${this.course}`)
//   }

//   calcAge(){
//     console.log(`I'm ${2037-this.birthYear} year old but i feel like ${2037-this.birthYear + 10} years old`)
//   }
// }


// const martha = new StudentCl('Martha Jones', 1999, "Computer science");
// console.log(martha)
// martha.introduce();
// martha.calcAge();


// Object.create Inheritance

// const PersonProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear);
//      },

//      setInfo(firstname,birthYear){
//         this.firstName= firstname;
//         this.birthYear= birthYear;
//      },
// }

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName,birthYear,course){
//   PersonProto.setInfo.call(this, firstName,birthYear);
//   this.course = course;
// }

// StudentProto.introduce = function(){
//   console.log(`My Name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay',1234,"computer science")
// jay.introduce();
// jay.calcAge();

// Classes Expamples with encapsulation and privacy

//Public fields
//Private fields

//Public Methods
//Private Methods

// (there is also the static version)

class Account {
  // Public fields (instances not in prototype)
  locale = navigator.language;
  
  // Private Fields
  #movments = [];
  #pin;

  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency=currency;
    this.#pin=pin;

    console.log(`Thank you for opening account, ${this.owner}`);
  }

  // Public Methods
  diposite(val){
    this.#movments.push(val);
  }

  getMovments(){
    return this.#movments;
  }

  withdrawl(val){
    this.diposite(-val);
  }

  

  requestLoan(val){
if(this.#approveLoan){
  this.diposite(val);
  console.log(`Loan Approved`)
}
  }

  static helper(){
    console.log(`I am helper function`)
  }

  // Private Methods
  #approveLoan(val){
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR',1111);
acc1.diposite(100);
acc1.withdrawl(50);
console.log(acc1);
acc1.requestLoan(4000);

 