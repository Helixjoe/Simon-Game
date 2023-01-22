let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let currentLevel = 0;
let userClickIndex = -1;
let gameOver = 0;

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
function nextSequenceAnimation(Button) {
  Button.classList.add("next");
  setTimeout(function () {
    Button.classList.remove("next");
  }, 200);
}

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  let Button = document.querySelector("." + randomChosenColour);
  nextSequenceAnimation(Button);
  playSound(randomChosenColour); //Audio
  document.querySelector("#level-title").innerHTML = "Level " + currentLevel;
}

function startOver() {
  gamePattern = [];
  userClickIndex = -1;
  currentLevel = 0;
}

function checkAnswer(currentLevel, index) {
  if (userClickedPattern[index] === gamePattern[index]) {
    if (userClickIndex === gamePattern.length - 1) {
      console.log("right");
      currentLevel++;
      userClickIndex = -1;
      userClickedPattern = [];
      document.querySelector("#level-title").innerHTML =
        "Level " + currentLevel;
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    document.querySelector("body").classList.add("game-over");
    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    document.querySelector("#level-title").innerHTML =
      "Game Over, Press 'a' to Restart";
    gameOver = 1;
  }
}

//Start the Game
if (currentLevel === 0) {
  document.addEventListener("keydown", function (event) {
    let Key = event.key;
    if (Key === "a") {
      if (gameOver == 1) {
        startOver();
      }
      document.querySelector("#level-title").innerHTML =
        "Level " + currentLevel;
      userClickedPattern = [];
      nextSequence();
    }
  });
}
// Button Identifier

for (let i = 0; i < buttonColours.length; i++)
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let userChosenColour = this.classList[1];
    userClickedPattern.push(userChosenColour);
    userClickIndex++;
    checkAnswer(currentLevel, userClickIndex);

    playSound(userChosenColour);
    let currentButton = document.querySelector("." + userChosenColour);
    ButtonAnimation(currentButton);
  });
