"use strict"

function playGame() { // master function
    let playerOneScore = 0;
    let playerTwoScore = 0;

    // Player 1's turn
    let roll1 = rollDie(4);
    let roll2 = rollDie(6);

    console.log(roll1);

    let total = Score(roll1, roll2)

    console.log('total', total);
}
    
function rollDie(dieSides) {
    let roll = Math.floor(Math.random()*dieSides)+1;
    return roll;
}

function Score(roll1,roll2,roll3,roll4,roll5,roll6){
  let score = (roll1+roll2+roll3+roll4+roll5+roll6);
  return score;
 }
 
playGame();