'use strict';

// document.querySelector('.message').textContent = ' correct number!';

// console.log(document.querySelector('.score').textContent);
// document.querySelector('.number').textContent = 19;
// document.querySelector('.guess').value = 13;
// console.log((document.querySelector('.guess').value = 13));



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  
  //  no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displayMessage('no number');
  }
  // win 
  else if (guess == secretNumber) {
    displayMessage('You win');
    // document.querySelector('.message').textContent = 'you Win';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = "30rem"
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
    
    // wrong answer 
    else if(guess !== secretNumber)
  {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too hight' : 'too low ');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too hight' : 'too low ';
      score--;
      document.querySelector('.score').textContent = score;   
    }
    else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game')
      document.querySelector('.score').textContent = score; 
    }
}    
    
    // too hight
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too hight';
  //     score--;
  //     document.querySelector('.score').textContent = score;   
  //   }
  //   else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = score; 
  //   }
  // }
  //   // too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;   
  //   }
  //   else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0; 
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing ...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem"
  
})
