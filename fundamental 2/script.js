// // strict helps to find the error in code in the console
"use strict";

// let driverLiscence = false;
// const passTest = true;

// if (passTest) driverLiscence = true;
// if (driverLiscence) console.log("you can drive");

// function logger(){
//      console.log('my name is jonas');
// }

// logger();

// function fruitsJuiser(apple, orange){
//     console.log(apple, orange);
//     const juiceFruit = `It is a juice of ${apple} apple and ${orange} orange`;
//     return juiceFruit;
// }

// const juicer = fruitsJuiser(3,4);
// console.log(juicer);

// //fucction decleration
// // const calcualtedAge = ageCalculator(2024, 2000); can be decleared first
// function ageCalculator(now, birthDate){
//     const currentAge = now - birthDate;
//     return currentAge;
// }

// const calcualtedAge = ageCalculator(2024, 2000);
// console.log(`You are ${calcualtedAge} years old`);

// //function expression
// //const calcualtedAges = ageCalculators(2024, 2000); cannot be deccleard first
// const ageCalculators = function (nows, birthDates){
//     return nows -birthDates;
// }

// const calcualtedAges = ageCalculators(2024, 2000);
// console.log(`You are ${calcualtedAges} years old`)

// // arrow function

// const ageCalcuate = birthDat => 2024 - birthDat;
// const birthAge = ageCalcuate(2000)
// console.log(`You are ${birthAge} yrs old`);

// const retireCalculate = (birthDa, firstName) => {
//     const realAge = 2024 - birthDa;
//     const retireIn = 65 - realAge;
//     const retireSent = `${firstName} will retire in ${retireIn} years`;
//     return retireSent;
// }

// const retireFinal = retireCalculate(2000, 'samyog');
// console.log(retireFinal);

// // calling another function
// const cutFruits = fruits => {
//     return fruits * 4;
// }

// const fruitsJuiser = (apple, orange) => {
//     const applePieces = cutFruits(apple);
//     const orangePieces = cutFruits(orange);
//     console.log(apple, orange);
//     const juiceFruit = `It is a juice of ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//     return juiceFruit;
// }

// const finalJuice = fruitsJuiser(2,3);
// console.log(finalJuice);

// challanges 1
// const avgScore = (a, b, c) => (a+ b+ c)/3;

// let avgDolphins =  avgScore(85,54,41);
// let avgKolas = avgScore(23, 34, 27);

// const calcAverage = (avgDolphins, avgKolas) => {
//     if(avgDolphins>=2*avgKolas){
//         console.log(`Dolphins wins(${avgDolphins} vs ${avgKolas})`)
//     } else if (avgKolas>=2*avgDolphins){
//         console.log(`Kolas wins( ${avgKolas} vs ${avgDolphins})`)
//     } else {
//         console.log(`no one wins`)
//     }
// }
// console.log(avgDolphins,avgKolas)
// calcAverage(avgDolphins,avgKolas);

//  avgDolphins =  avgScore(44,23,72);
//  avgKolas = avgScore(65, 54, 49);
// calcAverage(avgDolphins,avgKolas);

//Data structure
// Array

// const friends = ['michal','john','peater'
// ];
// console.log(friends)

// const year = new Array(1999,2000,3000);

// console.log(friends[1]);
// console.log(friends.length);
// // last item from array
// console.log(friends[friends.length-1]);
// //insert into array
// friends[2] = 'ram';
// console.log(friends)

// const firstName = 'johnas';
// const description = [firstName, 'jordan', 2024-2000, 'teacher', friends];
// console.log(description)
// console.log(description.length)

// const calcAge = (birthDay) => {
//     return 2024 - birthDay;
// }
// const year =[1999,2000,2010,1990]
// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length-1]);
// console.log(age1,age2,age3);

// const allAge = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length-1])];
// console.log(allAge);

//challenges2

// const calcTip = billValue => {

//     if(billValue >= 50 && billValue <=300){
//         const tipValue = billValue*0.15;
//         return tipValue;

//     } else {
//         const tipValue = billValue*0.2;
//         return tipValue;

//     }
// }

// calcTip(400);
// const bills = [125, 555, 44];
// const tipArray = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(tipArray);
// const totalBill = [(bills[0]+tipArray[0]),(bills[1]+tipArray[1]),(bills[2]+tipArray[2])];
// console.log(totalBill);

//Objects
// firstName,LastName ... are property of description
// const description = {
//   firstName: "Jonas",
//   lastName: "Sherdom",
//   job: "teacher",
//   age: 2024 - 2000,
//   friends: ["Maria", "carl", "james"],
// };

// console.log(description);
// //dot notation need real property name
// console.log(description.firstName);
// //bracket notation
// console.log(description["firstName"]); //we can put expression also insde [] to compute and provide output like below

// const nameKey = "Name";
// console.log(description["first" + nameKey]);
// console.log(description["last" + nameKey]);

// const intrestedIn = prompt(
//   "What you are intreste to know about jonas choose between firstName,lastName,job,age,friends"
// );

// switch (intrestedIn) {
//   case "firstName":
//     console.log(`His first name is ${description[intrestedIn]}`);
//     break;
//   case "lastName":
//     console.log(`His last name is ${description[intrestedIn]} `);
//     break;
//   case "job":
//     console.log(`His job is ${description[intrestedIn]} `);
//     break;
//   case "age":
//     console.log(`His age is ${description[intrestedIn]} `);
//     break;
//   case "friends":
//     console.log(`His friends are ${description[intrestedIn]} `);
//     break;
// default:
//     console.log('wrong question 🙅')
// }

// description.location = 'nepal';
// description['twitter'] = 'gg.twitter';
// console.log(description)

// console.log(`${description['firstName']} has ${description['friends'].length} and ${description['friends'][0]} is his best friend`)

// object methods
// const description = {
//   firstName: "Jonas",
//   lastName: "Sherdom",
//   job: "teacher",
//   birthYear: 2000,
//   friends: ["Maria", "carl", "james"],
//   hasDriverLiscence: false,

// //   calcAge: (birthYear) => {
// //     console.log(2024 - birthYear);
// //   },

// //   calcAge: function () {
// //     console.log(2024 - this.birthYear); // this don't work on arrow function this means the object that called it
// //   },

// calcAge: function ()  {
//    this.age = 2024 - this.birthYear; // create a new object age inside object thih.age and return age for use
//    return this.age;
//   },

//   calcYesNo : function(){
//    this.result = this.hasDriverLiscence ? "a":"no";
//    return this.result;
//   },

//   getSummary : function(){
//     return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.result} driver liscence`
//   }
// // calcYesNo : function (){
// //     if(this.hasDriverLiscence){
// //         return "a"
// //     }
// //     else {
// //         return "no"
// //     }
// // }
// };

// console.log(description.calcAge());
// console.log(description.calcYesNo())

// console.log(description.getSummary())

//challaner 3

// const mark = {
//     fullName:"Mark Miller",
//     mass : 78,
//     height:1.69,

//     calcBMI : function(){
//         this.bmi = this.mass / this.height**2;
//         return this.bmi;
//     }
// }
// const john = {
//     fullName:"John Smith",
//     mass : 92,
//     height:1.95,

//     calcBMI : function(){
//         this.bmi = this.mass / this.height**2;
//         return this.bmi;
//     },
// }

// // define the funtion to use this.bmi
// mark.calcBMI();
// john.calcBMI();

// if(mark.bmi> john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
// }

// iteration the for loops

// for(let rep = 1; rep <=10; rep++){
//     console.log(`Lifting weight ${rep} times 🏋️`)
// }

// const johnas = [
//     'jonas',
//     'skilmpton',
//     2024-2000,
//     'teacher',
//     ['Michal','Jordan','Tina'],
//     true
// ];

// const type = [];
// for (let i=0; i < johnas.length ;i ++){
//     console.log(johnas[i],typeof johnas[i]);

//     // type[i] = typeof johnas[i];// or
//     type.push(typeof johnas[i]);
// }
// console.log(type);

// // calculate age from birthyear and store in array

// const birthDate = [1999,2000,2007,2009];
// const age = [];

// for (let i=0; i< birthDate.length; i++){
//     let calcAge = 2024- birthDate[i];
//     age.push(calcAge);
// }

// console.log(age)

// console.log('-------- Only string prints-------')

// for (let i=0; i<johnas.length ; i++){
//     if(typeof johnas[i] !== 'string') continue ;
//     console.log(johnas[i], typeof johnas[i])
// }

// console.log('-------- do not print when number come-------')

// for (let i=0; i<johnas.length ; i++){
//     if(typeof johnas[i] === 'number') break ;
//     console.log(johnas[i], typeof johnas[i])
// }

// // print from backward

// for (let i = johnas.length-1;i >=0;i--){
//     console.log(johnas[i]);
// }

// // loop inside another loop

// for (let exercise = 1; exercise <= 3;exercise++){
//     console.log(`Doing ${exercise} exercise`);

//     for (let workout =1;workout <=4 ; workout++){
//         console.log(`Exercise ${exercise}: Doing ${workout} workout of ${exercise} exercise`)
//     }
// }

// while loop

// let rep = 1;
// while (rep<=10){
//     console.log(`working out for ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6)+1;
// console.log(dice)

// while(dice !==6){
//     console.log(`you rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6)+1; // again roll dice to get number
//     if (dice === 6){
//         console.log(`Hurry 🥳 you rolled ${dice}`)
//     }
// }

// challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bills) =>
//   bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// console.log(calcTip(bills[0]));

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   for (let i = 0; i < bills.length; i++) {
//     const bill = tip + bills[i];
//     totals.push(bill);
//   }
// }
// console.log(tips, totals, bills);

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     // sum =  sum + arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage(tips));

// console.log(calcAverage(totals));

// find amplidude min - max temp
// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = (t1, t2) => {
//   const temp = t1.concat(t2);
//   let max = temp[0];
//   let min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     const tempr = temp[i];
//     if (typeof tempr !== "number") continue;
//     if (tempr > max) {
//       max = tempr;
//     }
//     if (tempr < min) {
//       min = tempr;
//     }
//   }
//   console.log(min, max);
//   return min - max;
// };

// const amplitudeCalculated = calcAmplitude([2, 3, 19], [1, 0, 4]);
// console.log(amplitudeCalculated);

// // challenges 4

// const printForecast = (arr) => {
//     let str = '';
//   for (let i = 0; i <arr.length; i++) {
//     const output = `... ${arr[i]}°C in ${[i+1]} days`;
//     str = str + output;
//   }
//   return str;
// };

// const final = printForecast([2,3,4,12,3,4]);
// console.log(final)


