// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

// // 2. Inside the handler, create a new variable called userChosenColour to store the id
// of the button that got clicked.

var userClickedPattern = [];

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

// Button Identifier

for (var i = 0; i < buttonColours.length; i++)
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var userChosenColour = this.classList[1];
    userClickedPattern.push(userChosenColour);
  });
