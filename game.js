var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

var randomChosenColour = "." + buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

var Button = document.querySelector(randomChosenColour);

function ButtonAnimation(Button) {
  Button.classList.add("pressed");
  setTimeout(function () {
    Button.classList.remove("pressed");
  }, 3000);
}

ButtonAnimation(Button);
