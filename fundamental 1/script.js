// let js="excellent"
// // if (js =="excellent") alert ("javascript is fun")
// //javascript is dynamic typing means type of can be changed
// let firstName = "rakesh"
// console.log(firstName);
// console.log(typeof firstName);

// firstName = 23;
// console.log(typeof firstName);

// let country = 'nepal'
// let continent = 'asia'
// let population = 10

// console.log(country)
// console.log(continent)
// console.log(population)

// let islsIland = false
// let language ;

// console.log(typeof islsIland)
// console.log(typeof language)
// console.log(typeof country)
// console.log(typeof population)

// language = "nepali"
// let halfPopulation = population/2
// halfPopulation = halfPopulation++
// let finlandPopulation = 60
// let comparePopulation = population > finlandPopulation
// console.log(comparePopulation)
// let averagePopulation = 33
// comparePopulation = population < averagePopulation
// console.log(comparePopulation)
// let desctiption = country + " is in " + continent + " and its " + population +" million people speak "+ language
// console.log(desctiption)

// // template literals
// desctiption = `${country} is in ${continent}, and its ${population} million people speaks ${language}`

// if (population > averagePopulation){
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${averagePopulation - population} million below average`)
// }

// coding challenge #1

const marksMass = 95;
const marksHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);

// challenges 2

if (marksBMI > johnBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${marksBMI}`);
}

//challenges 3

const avgDolphins = (9 + 95 + 117) / 3;
const avgKoalas = (9 + 95 + 117) / 3;
console.log(avgDolphins,avgKoalas);

if (avgDolphins == avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  console.log(`There is a draw`);
} else if (avgDolphins > avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  {
    console.log(`Dolphins is the winner`);
  }
} else if (avgDolphins < avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    {
      console.log(`Kolas is the winner`);
    }
  }
  else {
    console.log(`No one wins`)
}

// switch challange


// challenges 4

// const tip = Number(prompt("Enter the cost of the item"));
// let tipCompare = tip >= 50 && tip <= 300;
// let totalcost;

// if (tipCompare) {
//   totalcost = tip + tip * 0.15;
//   console.log(`the bill was ${totalcost}, the tip was ${tip * 0.15}`);
// } else {
//   totalcost = tip + tip * 0.2;
//   console.log(`the bill was ${totalcost}, the tip was ${tip * 0.2}`);
// }

let bill = Number(prompt('Write the bill cost??'));
const tip = bill <= 50 && bill >=300 ? bill * 0.15 : bill*0.2 ;
console.log(`The bill was ${bill}, the tip was ${tip}, and
    the total value is ${bill + tip}`)

let day = "monday";

switch(day){
    case 'monday':
        console.log("hello monday");
        break;
    case 'tuesday':
        console.log("hello tuesday");
        break;
    case 'wednesday':
    case 'thrusday':
        console.log("hellow two day");
        break;
    default:
        console.log('Not a valid day')
}

const time = day == "monday" ? " work time" : "holiday";
console.log(time);

console.log(`i like to take ${day == "monday" ? "work time" : "holiday"}`);
