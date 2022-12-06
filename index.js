var buttonColor = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var Level = 0;

for (var i = 0; i < 4; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", buttonPressed);
}

function buttonPressed() {
  buttonId = this.id;
  userClickedPattern.push(buttonId);
  switch (buttonId) {
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      buttonAnimation(buttonId);
      break;

    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      buttonAnimation(buttonId);
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      buttonAnimation(buttonId);
      break;

    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      buttonAnimation(buttonId);
      break;
  }
  level_1(userClickedPattern.length - 1);
}
function level_1(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    document.getElementById("level-title").innerHTML =
      "Game Over, Press 0 to Restart";
  }
}
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 10);
}

document.addEventListener("keypress", keyPressed);

function keyPressed(event) {
  console.log(event.key);
  var key = event.key;
  if (key === "A" || key === "a") {
    document.getElementById("level-title").innerHTML = "Level " + Level;
    if (started == false) {
      started = true;
      nextSequence();
    }
  }
  if (key == 0) {
    restart();
  }
}
function nextSequence() {
  userClickedPattern = [];
  Level++;
  document.getElementById("level-title").innerHTML = "Level " + Level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColor[randomNumber];
  gamePattern.push(randomChosenColour);
  buttonAnimation(randomChosenColour);
  playSound(randomChosenColour);
}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function restart() {
  document.getElementById("level-title").innerHTML = "Press A Key to Start";

  Level = 0;
  gamePattern = [];
  started = false;
}
