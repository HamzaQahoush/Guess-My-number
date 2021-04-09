'use strict';
let check = document.querySelector('.check');
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let secretNumber = document.querySelector('.number');
let highscore = 0;

function displayMsg(msg) {
  document.querySelector('.message').textContent = msg;
}

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMsg('No Number');
  } else if (guess === random) {
    displayMsg('You are Correct ✔ ');
    $(function () {
      $('body').css('background-color', 'green');
      $('.number').css('width', '30rem');
    });
    secretNumber.textContent = random;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').innerHTML = highscore;
    }
  } else if (guess !== random) {
    if (score > 1) {
      displayMsg(guess > random ? 'Too high 📈' : ' Too low 📉  ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //Before using dry code
  // } else if (guess > random) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = ' Too low 📉  ';
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   document.querySelector('.message').textContent = 'Too high 📈';
  // } else if (guess < random) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = ' Too low 📉  ';
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMsg('Start guessing...!');
  document.querySelector('.number').textContent = ' ? ';
  document.querySelector('.guess').value = '';
  $(function () {
    $('body').css('background-color', '#222');
    $('.number').css('width', '12rem');
  });
});
