"set strict"
var dice = {
    sides: 6,
    roll: function (stringe) {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  let onclick;
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  