'use strict';

const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekDays[2]]: {
    open: 12,
    close: 22,
  },
  [weekDays[3]]: {
    open: 11,
    close: 23,
  },
  [weekDays[weekDays.length - 2]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);
// Data needed for a later exercise


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  //  order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // above function can be written as according to ES6

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is the deilcious pasta with ${ing1}, ${ing2}, ${ing3} incrediants`
    );
  },

  orderPizza(mainIngredent, ...otheIngredent) {
    console.log(mainIngredent);
    console.log(otheIngredent);
  },
};
/*

// SPLIT
console.log('a+very+sting'.split('+')); // remove + and store in array
console.log('Jonas Schmedtmann'.split(' '));

const [firstName,lastName] = "jonas schmedtmann".split(' ')
console.log(firstName,lastName)

const allName = ['Mr.',firstName[0].toUpperCase() + firstName.slice('1') ,lastName[0].toUpperCase() + lastName.slice('1')].join(' ')
console.log(allName);

const capitalizeName = function(name){

  const names = name.split(" ");
  const nameUpper = [];
  for (const n of names){
  nameUpper.push(n[0].toUpperCase() + n.slice('1'));
  }
  console.log(nameUpper.join(" "));

}
capitalizeName("jessica ann smith davis")
capitalizeName("nabin bohara")

//PADDING a string
const message ="Go to gate 23!";
console.log(message.padStart(25,'+').padEnd(30,"="));
console.log('jonas'.padStart(25,"+").padEnd(30,"="));

const maskCreditCard = function(number){
  const str = number + '';// convert to string or String(number)
  const last = str.slice(-4);
  return last.padStart(str.length,'$');

}

console.log( maskCreditCard(32453243245));
console.log( maskCreditCard(232132134242342));

//REPEAT
const message2 = 'Bad weather... All departures are delayed... '
console.log(message2.repeat(5))

const planesInLine = function(n){
  console.log(`There are ${n}, planes in line ${'✈️'.repeat(n)}`)
}

planesInLine(4);
planesInLine(8);
planesInLine(10);




/*
// Woring with Strings
const airline = 'TAP Air Protugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log((airline.indexOf('r')));
console.log((airline.lastIndexOf('r')));// last one of "r"
console.log(airline.indexOf('Portugal'));// case sensetive need to be same as above if protugal -1

console.log(airline.slice(1)); 
// console.log(airline.slice(4,7)); // 7-4 = 3 words dont slice 7index word

// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') +1))

// console.log(airline.slice(-2))
// console.log(airline.slice(1, -1
// ))

// const checkMiddleSeat = function(seat)
// {
//   // B and E are middle sits
//   const s = seat.slice(-1);
//   if (s === "B" || s==="C"){
//     console.log('You are lucky') 
    
//   }else {
//     console.log('You got other seat')
//   }
// }


// console.log(new String('jonas'));
// console.log(typeof new String('Jonas')); // object
// console.log(typeof new String('Jonas').slice(1)); // string

// // STRING methods
// console.log(airline.toLocaleLowerCase());
// console.log(airline.toUpperCase());
// console.log('nabin'.toUpperCase());

// // FIX capitalization in name
// const passanger = 'joNaS';
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // remove space
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// // REPLACING
// const priceGB ='288,97#';
// const priceUs = priceGB.replace('#',"$").replace(',','.')
// console.log(priceUs)
// const announcemen = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcemen.replace('door','gate')); // replace first one 
// console.log(announcemen.replaceAll('door','gate'));// replace all
// console.log(announcemen.replace(/door/g,'gate')); // another way to replace all

// //BOOLEANS
// const palne = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Air') && plane.endsWith('neo')){
//   console.log("part of new Airbus family")
// }

// //PRACTICE EXERCISE
// const checkBaggage = function(items){
//   const baggage = items.toLocaleLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log("you are not allowed on plane")
//   } else {
//     console.log("You are welcome")
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


/*
const question = new Map([
  ['question','What is the best programming language in world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'Correct 🥳'],
  [false,'Try Again🫡🤯'],
]);
/*
// Convert object to map

console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

// Quiz question
console.log(question.get('question'));
for (const [key,value] of question){
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`)
}

// const answer = Number(prompt("Your answer"));
const answer = 3;

// question.get('correct') === answer ? console.log(question.get(true)) : console.log(question.get(false));
console.log(question.get(question.get('correct') === answer)) 

// convert Map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.values()]);
console.log([...question.keys()]);

/*
// MAP data structure can use any type of data to make key
const restrunt = new Map();
restrunt.set('name', 'Classico Italiono');
restrunt.set(1, 'Firenze, Italy');
console.log(restrunt.set(2, 'Lisbon, Protugle'));

restrunt
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(restrunt.get("name"));
console.log(restrunt.get(true));
console.log(restrunt.get(1));

const time = 22;
console.log( restrunt.get(time > restrunt.get('open') && time < restrunt.get('close')));
console.log(restrunt.has('categories'));
restrunt.delete(2);
//restrunt.clear();
const arr = [1,2];
restrunt.set(arr,'Test');
console.log(restrunt.get(arr));
restrunt.set(document.querySelector('h1'), 'Heading')
console.log(restrunt);
console.log(restrunt.size)


/*

// SET data structure has to be unique 
const orderSet = new Set([
  'pasta',
  'pizza',
  'Risotto',
  'pasta',
  'pizza'
])
console.log(orderSet);// remove duplicate

console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza')) // false
console.log(orderSet.has('pizza'))// true
orderSet.add('Garlic Bread');// don't add two same name value
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear(); // delete all
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager','Chef', ' Waiter'];

const staffUnique = [...new Set (staff)]; // put in array of set
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager','Chef', ' Waiter']).size)
console.log(new Set('Nabinbohara').size);

// const properties = Object.keys(openingHours);
// console.log(properties); // gives the main content 

// let openStr = `we are open for ${properties.length} days:`;

//  for (const day of properties){
//   openStr += `${day},`;
// }
// console.log(openStr)

// // Property values
// const value = Object.values(openingHours);
// console.log(value)

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key,{open,close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`)
// }




/*
// (optional chainning) if certain thing does not exists then return undined
restaurant.openingHours && restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);

// using optional chaining
console.log(restaurant.openingHours.mon?.open);// checks mon exists or not
console.log(restaurant.openingHours?.mon?.open); // check if openingHours and mon exists or not

// example of optional chaining
const days = ['sun','mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// for Method using (optional chaining)
console.log(restaurant.order?.(0,1)?? 'Method does not exists');
console.log(restaurant.orderRessote?.(0,1)?? 'Method does not exists');

// Arrays using (optional chaining)
const user = [{
  name : "Jonas",
  email:'aldjf@gmail.com',
},{
  name : "ram",
  email:'ram@gmail.com',
}]
console.log(user[1]?.name ?? 'user array empty');


// // for of loop
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]

// // clg all item of menu using (for of) loop
// for (const item of menu) console.log(item);
// // print index as well
// for (const [i,j] of menu.entries()) {
//   console.log(`${i + 1} : ${j}`)
// };
// console.log(...menu.entries());

// const rest1 ={
//   name: 'Capri',
//   numGuests:20,
// }

// const rest2 ={
//   name: 'La Piazza',
//   owner: 'samyog bohara',
// }

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator(null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOS>';
// // rest2.owner = rest2.owner && '<ANONYMOS>';

// rest1.owner &&= '<ANONYMOS>';
// rest2.owner &&= '<ANONYMOS>';

// console.log(rest2);
// console.log(rest1);

// // SPREAD , because on right side of =
// const arr = [1,2,...[3,4]];

// //REST , because on LEFT side of =
//  const [a,b,...others] = [1,2,3,4,5,6];
//  console.log(a,b,others);

//  const [firstOne, , secondOne,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(firstOne,secondOne,otherFood);

// // Objects REST
// const{sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // Functions rest paramaters ...numbers
// const add = function(...numbers){
//  let sum = 0;
//  for (let i=0;i<numbers.length;i++) sum +=numbers[i];
//  console.log(sum);
// }

// add(2,3);
// add(3,4,5,6,32);

// const x = [4,5,6,7,8];
// add(...x);

// restaurant.orderPizza('mushroom','capachino','ranmils');

// // OR and AND operator it can use any data type,
// // and return any datatype, short-circuting mean return first true value on OR operator
// console.log('---- OR Output-----');
// console.log(3 || 'jonas');
// console.log('' || "jonas");
// console.log(true || 0);
// console.log(undefined || null); // here two are false but return null

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

// // here if we put restrusant.numguest = 0 OR operator retruns the other value not 0
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// //  nullishi coalescing operator // we can solve by using ?? which says 0 and ' ' are true value and return them
// const guest3 = restaurant.numGuests ?? 10;
// console.log(guest3);

// console.log('----AND----'); // short circuit return when first value is false
// console.log(0 && 'Jonas');
// console.log(7 && 'jonas');
// console.log('hello' && 23 && null && 'jonas');

// // practicle example check if element exists use AND operator
// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms','sapnish')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom','spanish');

// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1"),
//   // prompt("Ingredient 2"),
//   // prompt("Ingredient 3"),
// ,]

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

// const newRestaurant = {
//   ...restaurant, foundedIn : 1999,
//   founder : 'Helbert',
// }
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = "jolly baba";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // spread operators

// // with out spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // with spread operator
// const newGoodArr = [1,2, ...arr];
// console.log(newGoodArr);

// // log individual element of array
// console.log(...newGoodArr);

// // creating new array copying restrurant main menu and adding more
// const newMenu = [...restaurant.mainMenu, "Masu" , 'bhat'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2
// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables : arrays , string, maps, sets. not Object
// const str = 'jonas';
// const letters = [...str, "", 'S.']
// console.log(letters)
// console.log(...str); // dont works with template letrals cllg(`${...str}`)

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Vel del Soel,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   starterIndex : 3,
//   address: 'Imadol,Lalitpur'
// })

// // destructing object
// const { name, openingHours, categories } = restaurant; // specify exact name
// console.log(name, openingHours, categories);

// // to change variable name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // default value object = [] if not used throw undefined
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variable or switching
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b); // override a and b

// // nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // destructuring array

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// // const [first, ,second] = restaurant.categories; // first ,  ,(to skip) second
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // to switch main and secondary with out destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// // with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return value from a function
// console.log(restaurant.order(2, 1));
// const [starter, mainCourse] = restaurant.order(2, 1);
// console.log(starter, mainCourse);

// // nested array
// const nested = [2, 4, [4, 6]];
// // const [i, , j] = nested;
// // console.log(i,j);

// // want inside insted element
// // const [i, , [j,k]] = nested;
// // console.log(i,j,k)

// // default values

// const values = [2, 4];
// const [i = 1, j = 1, k = 1] = values; // if no value present defult value gets printed
// console.log(i, j, k);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1)
 create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original 
team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)


BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
 In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
// Solution of Coding Challenge 2

for (const [goal , player] of game.scored.entries()){
  console.log(`Goal ${goal+1} : ${player}`)
}
const odds = Object.values(game.odds);
console.log(odds.length)

let average = 0;
for (const odd of odds) 
  average += odd;
  average /= odds.length;
  console.log(average);
  /*
  3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
*/

/*
for(const [team,odd] of Object.entries(game.odds)){
 
const victoryDraw = team === 'x' ? 'draw' : `victory ${game[team]}`
console.log(`Odd of ${victoryDraw}: ${odd}`)
}

// bonus
// So the solution is to loop over the array, and add the array elements as object properties, and 
//  then increase the count as we encounter a new occurence of a certain element
const scoreror = {};
for (const scorer of game.scored){
  scoreror[scorer] ? scoreror[scorer]++ : scoreror[scorer] = 1;
}
console.log(scoreror)


// answer of coding challenge 1
// const [players1, players2] = game.players;
// const [gk,...fieldPlayers] = players1;
// const allPlayers = [...players1,...players2];
// const players1Final =[...players1,'Thiago','Coutinho','Perisic'];
// // const {team1, x : draw,team2} = game.odds; // OR
// const {odds:{team1,x:draw,team2}} = game;
// console.log(team1,draw,team2);

// const printGoals = function(...players){
//   console.log(`${players.length} goals were scored`)
// }
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
// #3 challenge solution
const events = [...new Set(gameEvents.values())]; // to array
console.log(events)

gameEvents.delete(64);
console.log(gameEvents)


const timer = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${timer/gameEvents.size} minutes`)


for (const [key,value] of gameEvents){
  for(let i=1;i<=10;i++){
    const calc = 9*i;
    if(key === calc){
      console.log(`At ${key}min ${value} happend`);
    }
  }
}

for (const [key,value] of gameEvents){
  const half = key <= 45 ? 'FIRST' : "SECOND"
console.log(`[${half} HALF ${key}: ${value}]`)
}
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const row = text.split('\n');

  for (const [i, input] of row.entries()) {
    const [first, second] = input.toLowerCase().trim().split('_');

    const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
  }
});

// const camelCase = function(input){
//   const lower = input.toLowerCase().trim().split('_');
//   const [first,second] = lower;
//   console.log(`${first}${second[0].toUpperCase() + second.slice(1)}`)

// }
// // camelCase('underscore_case')
// // camelCase(' first_name')
// // camelCase('Some_Variable')
// // camelCase('  calculate_AGE')
// // camelCase('underscore_case')

// string exercise 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const str = input => input.slice(0,3).toUpperCase();

for (const flight of flights.split('+')){
const [type, from,to, time] = flight.split(';');
const output = `${type.startsWith('_Delayed')? "🔴":""}${type.replaceAll('_'," ")} ${str(from)} ${str(to)} (${time.replace(':',"h")})`.padStart(40);
console.log(output);
}