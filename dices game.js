"set strict"

function playGame() { // master function
    let playerOneScore = 0;
    let playerTwoScore = 0;

    // Player 1's turn
    let rollArray = roll();
    
    // console.log('total', total);
}

function roll() {
    let roll1 = Math.floor(Math.random()*4) +1;
    let roll2 = Math.floor(Math.random()*6) +1;
    let roll3 = Math.floor(Math.random()*8) +1;
    let roll4 = Math.floor(Math.random()*10)+1;
    let roll5 = Math.floor(Math.random()*12)+1;
    let roll6 = Math.floor(Math.random()*20)+1;
    
    console.log(roll1);
    console.log(roll2);
    console.log(roll3);
    console.log(roll4);
    console.log(roll5);
    console.log(roll6);


let subScore = [roll1,roll2,roll3,roll4,roll5,roll6];
let playerOneScore = roll1+roll2+roll3+roll4+roll5+roll6;
 


   console.log ('Player 1 =', playerOneScore)
}

   //odd and even coding
  
// let playerOnescore=
 
playGame();