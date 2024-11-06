'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// initaial condition

let score,currentScore,activePlayer,playing;

const init = () => {

  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  playing = true;
};

init(); // decleration are inside the function and not accessible to outside so call it

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for 1 if true switch player
    if (dice !== 1) {
      // add current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
      // recatoring
      //     document.getElementById(`current--${activePlayer}`).textContent = 0;
      //     currentScore=0;
      //     activePlayer = activePlayer === 0 ? 1 : 0;
      //     player0El.classList.toggle('player--active');
      //     player1El.classList.toggle('player--active');
    }
  }
});

// Hold Functionality

btnHold.addEventListener('click', function () {
  if (playing) {
    // add to the score of respective activePlayer
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //if 100 winner
    if (score[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //else switch player
      switchPlayer();
    }
  }

  //recatoring

  // document.getElementById(`current--${activePlayer}`).textContent = 0;
  // currentScore=0;
  // activePlayer = activePlayer === 0 ? 1 : 0;
  // player0El.classList.toggle('player--active');
  // player1El.classList.toggle('player--active');
});

btnNew.addEventListener('click', init);
