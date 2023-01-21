let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let currentlevel = 0;
let userClickIndex = 0;

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function ButtonAnimation(Button) {
  Button.classList.add("pressed");
  setTimeout(function () {
    Button.classList.remove("pressed");
  }, 100);
}
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  let Button = document.querySelector("." + randomChosenColour);
  ButtonAnimation(Button);
  playSound(randomChosenColour); //Audio
  document.querySelector("#level-title").innerHTML = "Level " + currentlevel;
}

function checkAnswer(currentLevel, index) {
  if (userClickedPattern[index] === gamePattern[index]) {
    console.log("right");
    currentLevel++;
    setTimeout(nextSequence, 1000);
    userClickedPattern = [];
  } else {
    console.log("wrong");
  }
}

//Start the Game

document.addEventListener("keydown", function (event) {
  let Key = event.key;
  if (Key === "a") {
    document.querySelector("#level-title").innerHTML = "Level " + currentlevel;
    nextSequence();
  }
});

// Button Identifier

for (let i = 0; i < buttonColours.length; i++)
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let userChosenColour = this.classList[1];
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    userClickIndex++;
    if (userClickIndex === gamePattern.length) {
      checkAnswer(currentlevel, userClickIndex);
    }
    let currentButton = document.querySelector("." + userChosenColour);
    ButtonAnimation(currentButton);
  });
