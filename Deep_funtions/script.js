'use strict';

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the 
color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. 
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',
        function(){
            header.style.color = 'blue';
        }
    )
})();




let f;
const g = function(){
    const a = 23
;
f = function(){
    console.log(a*2);
}
}

g();
f();
console.dir(f);

const h = function(){
    const b = 777
;
f = function(){
    console.log(b*2);
}
}

h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n,wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passanger`);
        console.log(`There are 3 groups, each with ${perGroup} passanger`)
    },wait*1000)
    console.log(`Will start boarding in ${wait} seconds`)
};

const perGroup = 1000; // will not use use perGroup in closure 
boardPassengers(180,4);


/*

// Call and Apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  //book: function(){} or
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum},${name}` });
  },
};

// CLOSURE
const secureBooking = function(){
    let passangerCount = 0;

    return function(){
        passangerCount++;
        console.log(`${passangerCount} passangers`)
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

/*
lufthansa.book(234,'Rakesh Daju');
lufthansa.book(345,'Manik Rokaya');
console.log(lufthansa.booking);

const ewrowings = {
    airline:'Eurowings',
    iataCode:'EW',
    booking:[],
}

const books = lufthansa.book;

//books(463,'Shammy')// does not work so we use below methods
//ewrowings.books(453,'Rammay')// does not work so we use below methods

/*
// CALL method
books.call(ewrowings,34,"Shara williams");
books.call(lufthansa,345,'Mary Cooper');

// APPLY method takes array
const flightData = [583,'George Cooper'];
books.apply(ewrowings,flightData);

books.call(lufthansa,...flightData);

// BIND method does not call function immidiately insted returns new function where this keword is bound
const bookEW = books.bind(ewrowings);
const bookLU = books.bind(lufthansa);
bookEW(234,'Sanjaya');

const bookEU23 = books.bind(ewrowings,23);// Partial Application some part of function already set
bookEU23('Martha');
bookEU23('Jonshon');
bookEU23('Cooper');

// BIND with event listner
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes)
}
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

// PARTIAL Application

const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(300));

const addTaxRate = (rate) => {
    return (value) => {
        return value + value * rate;
    }
}

const addVat1 = addTaxRate(0.23);
console.log(addVat1(300));
console.log(addVat1(200));


/*
// Function returning function
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greetHey = greet('Hey');
// greetHey('Jonas');
// greetHey('Ram');

// greet('Hello')('Sita')

//using arrow function
// const greet = (greeting) => {
//     return (name) => {
//         console.log(`${greeting} ${name}`)
//     }
// }

//or using arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greetNameste = greet('Nameste');
greetNameste('Rakesh');
greet('Salam')('Manik');

/*

// Callback function
const oneWord  = function(str){
    return str.replace (/ /g,'').toLowerCase();// / /g select all spaces 
}

const upperFirstWord = function(str){
    const [first , ...others] = str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

const transformer = function(str,fn){
    console.log(`Transformed : ${fn(str)}`);
    console.log(`Original : ${str}`);
    console.log(`Transformed by : ${fn.name}`);
}

transformer('JavascripT is the best language',upperFirstWord);
transformer('JavascripT is the best language',oneWord);

/*
const bookings = [];

//default parameters
const createBooking = function (flightNum,
     numPassanger = 1,
      price = 199*numPassanger,) {
  //ES5
  // numPassanger = numPassanger || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  
};
createBooking('Lh123') ;
createBooking('Lh123',2,800);
createBooking('LH23',3);
createBooking('LH23',undefined,3000);
*/
/*
const flight = "LH234";
const jonas = {
name : "Jonas Schmedtmann",
passport: 2343423423
}

const checkIn = function(flightNum,passanger){
    flightNum = "Lh999";
    passanger.name = "Mr." + passanger.name;

    if (passanger.passport == 2343423423){
        alert('Check in')
    }else {
        alert('Wrong passport')
    }
}

checkIn(flight,jonas);
console.log(flight);// premitive value so flightNum and flight are diff and flight does not change
console.log(jonas);// reference pointing same object address so changed

const newPassword = function(person){
    person.passport = Math.trunc(Math.random()*10000000000);
};

newPassword(jonas);
checkIn(flight,jonas);
*/

/* 
Challlenge #1
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
   Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 
'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. 
If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array'){
    if(type === 'array'){
        console.log(this.answers)
    } else if(type === 'string'){
        console.log(`Polls are ${this.answers.join(', ')}`)
    }
  }
};
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResult.call({answers:[5, 2, 3]},' ')
*/

// Immidiately Infvoked function IIFE
/*
(function(){
    console.log(`this will never return again`)
})();
(()=>{
    console.log(`this wiil also never run again`)
})();

{
    const name = 'nabin'

}
*/