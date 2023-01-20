var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function ButtonAnimation(Button) {
  Button.classList.add("pressed");
  setTimeout(function () {
    Button.classList.remove("pressed");
  }, 100);
}
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = "." + buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var Button = document.querySelector(randomChosenColour);
  ButtonAnimation(Button);
  playSound(buttonColours[randomNumber]); //Audio
  console.log(buttonColours[randomNumber]);
}

// Button Identifier

for (var i = 0; i < buttonColours.length; i++)
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var userChosenColour = this.classList[1];
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    var currentButton = document.querySelector("." + userChosenColour);
    ButtonAnimation(currentButton);
  });
