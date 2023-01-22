let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let currentLevel = 0;
let userClickIndex = -1;

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
  document.querySelector("#level-title").innerHTML = "Level " + currentLevel;
}

function checkAnswer(currentLevel, index) {
  if (userClickedPattern[index] === gamePattern[index]) {
    console.log("right");
    userClickIndex = -1;
    userClickedPattern = [];
    document.querySelector("#level-title").innerHTML = "Level " + currentLevel;
    setTimeout(nextSequence, 1000);
  } else {
    console.log("wrong");
  }
}

//Start the Game

document.addEventListener("keydown", function (event) {
  let Key = event.key;
  if (Key === "a") {
    document.querySelector("#level-title").innerHTML = "Level " + currentLevel;
    userClickedPattern = [];
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
    let currentButton = document.querySelector("." + userChosenColour);
    ButtonAnimation(currentButton);
    if (userClickIndex === gamePattern.length - 1) {
      checkAnswer(currentLevel, userClickIndex);
      currentLevel++;
    }
  });
