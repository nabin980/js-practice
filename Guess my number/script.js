"use strict";
/*
console.log(document.querySelector('.message').textContent);// querySelector select the element with the class name or id with code 
// and .textContent dispaly text conetent only

document.querySelector('.message').textContent = "You Got it right..." // change the textContent of class message

document.querySelector('.number').textContent = '20';
document.querySelector('.guess').value = 23;// to manipulate input type value
console.log(document.querySelector('.guess').value); // to print the intput type value
*/

let secreteNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const dispalyNumber = function (number){
    document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', 
    function(){
        const guess = Number(document.querySelector('.guess').value);
        //!guess means false = 0
        if(!guess){
            displayMessage("⛔ No Number");
            // document.querySelector(".message").textContent = "⛔ No Number";
        } else if (guess === secreteNumber){
            displayMessage(' 🥳You guessed the number');
            // document.querySelector('.message').textContent = ' 🥳You guessed the number';
            document.querySelector('body').style.backgroundColor = '#00FF00'; // use camel case if style has two word like 
            // background- color in css change the inline style in console don't change css file itself
            document.querySelector('.number').style.width = '8rem'; // change the inline style in console
            dispalyNumber(secreteNumber);
            // document.querySelector('.number').textContent = secreteNumber ;

            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        } 

        // refracted 
        
        else if (guess !== secreteNumber){
            if (score > 1){
                displayMessage(guess > secreteNumber ? '📈Too high' : '📉Too low');
                // document.querySelector('.message').textContent = guess > secreteNumber ? '📈Too high' : '📉Too low';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage(' 🤯 You lost the game');
                // document.querySelector('.message').textContent = ' 🤯 You lost the game';
                document.querySelector('.score').textContent = 0;
            }
        }
        
        // else if (guess > secreteNumber){
        //     if (score > 1){
        //         document.querySelector('.message').textContent = '📈Too high';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = ' 🤯 You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
           
        // }  else if (guess < secreteNumber){
        //     if (score > 1){
        //         document.querySelector('.message').textContent = '📉Too low';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = ' 🤯 You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
            
        // }  
    }
)

document.querySelector('.again').addEventListener('click', 
    function (){
        score = 20;
        secreteNumber = Math.trunc(Math.random()*20)+1;
        displayMessage('Start guessing ....')
        // document.querySelector('.message').textContent = 'Start guessing ....';
        document.querySelector('.score').textContent = score;
        document.querySelector('.score').textContent = '';
        document.querySelector('body').style.backgroundColor = '#000000';
        document.querySelector('.number').style.width = '4rem';
        dispalyNumber('?');
        // document.querySelector('.number').textContent = '?';
    }
)