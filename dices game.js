"use strict";

playGame();

 function playGame() { // master function
    let playerOneScore = 0;
   
    playGame2(); 
    
 function playGame2() {
    // Player 1's turn
    let playerTwoScore = 0;
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
     let Player1Score = roll1+roll2+roll3+roll4+roll5+roll6;
     console.log ('Player 1 Score=', Player1Score)
    
     let isEven;
     if (Player1Score%2 === 0){
      isEven = true;
     }
     else if (Player1Score%2 !== 0){
      isEven = false
      }
     let userInput= prompt("player 2: Enter odd or even")

     if(isEven==="even"){
        if (userInput === "even"){
            console.log ('your guess was right')
        }
        else{
            console.log ("your guess was wrong")
        }
     }
     else{
        if (userInput === "odd"){
            console.log ('your guess was right')
        }
        else{
            console.log ("your guess was right")
        }
    }
 
//player two coding

}
 }
 playGame2(); 
    
 function playGame2() {
    // Player 2's turn
    let player2Score = 0;
    let rollArray = roll();
    
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
     let Player2Score = roll1+roll2+roll3+roll4+roll5+roll6;
     console.log ('Player 2 Score=', Player2Score)
   
     let isEven;
     if (Player2Score%2 === 0){
     isEven = true;
     }
     else if (Player2Score%2 !== 0){
     isEven = false
     }
     let userInput= prompt("player 2: Enter odd or even")

      if(isEven==="even"){
       if (userInput === "even"){
           console.log ('your guess was right')
       }
       else{
           console.log ("your guess was wrong")
       }
     }
     else{
       if (userInput === "odd"){
           console.log ('your guess was right')
       }
       else{
           console.log ("your guess was right")
       }
   }

  




  }