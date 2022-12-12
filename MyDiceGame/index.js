  var number1 = Math.floor(Math.random() * 6 + 1);
  var randomDiceImage = "dice" + number1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;


  var number2 = Math.floor(Math.random() * 6 + 1);
  var randomDiceImage2 = "dice" + number2 + ".png";
  var randomImageSource2 = "images/" + randomDiceImage2;

  document.querySelector(".dice1").setAttribute("src", randomImageSource);
  document.querySelector(".dice2").setAttribute("src", randomImageSource2);

  // if (number1 === 1) {
  //   document.querySelector(".dice1").setAttribute("src", "images/dice1.png");
  // } else if (number1 === 2) {
  //   document.querySelector(".dice1").setAttribute("src", "images/dice2.png");
  // } else if (number1 === 3) {
  //   document.querySelector(".dice1").setAttribute("src", "images/dice3.png");
  // } else if (number1 === 4) {
  //   document.querySelector(".dice1").setAttribute("src", "images/dice4.png");
  // } else if (number1 === 5) {
  //   document.querySelector(".dice1").setAttribute("src", "images/dice5.png");
  // } else if (number1 === 6) {
  //   document.querySelector(".dice1").setAttribute("src", "images/dice5.png");
  // }

  // if (number2 === 1) {
  //   document.querySelector(".dice2").setAttribute("src", "images/dice1.png");
  // } else if (number2 === 2) {
  //   document.querySelector(".dice2").setAttribute("src", "images/dice2.png");
  // } else if (number2 === 3) {
  //   document.querySelector(".dice2").setAttribute("src", "images/dice3.png");
  // } else if (number2 === 4) {
  //   document.querySelector(".dice2").setAttribute("src", "images/dice4.png");
  // } else if (number2 === 5) {
  //   document.querySelector(".dice2").setAttribute("src", "images/dice5.png");
  // } else if (number2 === 6) {
  //   document.querySelector(".dice2").setAttribute("src", "images/dice5.png");
  // }

  if (number1 > number2) {
    document.querySelector("h1").innerHTML = "<img class='flag-image' src='images/flag.png'> Player 1 WINS!";
  } else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS! <img class='flag-image' src='images/flag.png'>";
  } else {
    document.querySelector("h1").innerHTML = "It's a DRAW!";
  }
