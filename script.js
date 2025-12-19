const pads = document.querySelectorAll(".pad");
const startBtn = document.querySelector(".start");
const restartBtn = document.querySelector(".restart");
const levelDisplay = document.getElementById("level");
const hubLevel = document.getElementById("hub-level");
const highScoreDisplay = document.getElementById("highscore");

let gameSequence = [];
let userSequence = [];
let level = 0;
let highScore = 0;
let gameActive = false;

const sounds = {
  green: new Audio("assets/sounds/green.mp3"),
  red: new Audio("assets/sounds/red.mp3"),
  yellow: new Audio("assets/sounds/yellow.mp3"),
  blue: new Audio("assets/sounds/blue.mp3"),
  wrong: new Audio("assets/sounds/wrong.mp3")
};

Object.values(sounds).forEach(sound => {
  sound.preload = "auto";
});

function flashPad(pad) {
  const color =
    pad.classList.contains("pad-top-left") ? "green" :
    pad.classList.contains("pad-top-right") ? "red" :
    pad.classList.contains("pad-bottom-left") ? "yellow" :
    "blue";

  pad.classList.add("active");

  const sound = sounds[color];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }

  setTimeout(() => pad.classList.remove("active"), 300);
}

function randomPad() {
  return pads[Math.floor(Math.random() * pads.length)];
}

function startGame() {
  if (gameActive) return;

  gameActive = true;
  gameSequence = [];
  userSequence = [];
  level = 0;

  levelDisplay.textContent = "0";
  hubLevel.textContent = "0";
  document.querySelector(".hub-note").textContent = "Watch carefully 👀";

  setTimeout(nextRound, 800);
}

function restartGame() {
  gameActive = false;
  gameSequence = [];
  userSequence = [];
  level = 0;

  levelDisplay.textContent = "0";
  hubLevel.textContent = "0";
  document.querySelector(".hub-note").textContent = "Game reset. Press Start!";
}

function nextRound() {
  if (!gameActive) return;

  level++;
  levelDisplay.textContent = level;
  hubLevel.textContent = level;

  const newPad = randomPad();
  gameSequence.push(newPad);
  userSequence = [];


  setTimeout(() => {
    flashPad(newPad);
    document.querySelector(".hub-note").textContent = "Your turn 🤔";
  }, 500);
}

pads.forEach(pad => {
  pad.addEventListener("click", () => {
    if (!gameActive) return;

    userSequence.push(pad);
    flashPad(pad);

    const index = userSequence.length - 1;


    if (userSequence[index] !== gameSequence[index]) {
      sounds.wrong.currentTime = 0;
      sounds.wrong.play();

      document.querySelector(".hub-note").textContent = "❌ Wrong! Game Over.";
      gameActive = false;

      if (level > highScore) {
        highScore = level;
        highScoreDisplay.textContent = highScore;
      }
      return;
    }

    
    if (userSequence.length === gameSequence.length) {
      document.querySelector(".hub-note").textContent = "✅ Correct! Next color...";
      setTimeout(nextRound, 1000);
    }
  });
});

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
