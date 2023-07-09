const hardInputs = document.querySelectorAll(".hard-level-select-input");
const startButton = document.querySelector(".start-game-button");
const hardLevelElem = document.querySelector(".hard-level-elem");
const containeer = document.querySelector(".containeer");
const form = document.querySelector("form");

const gameHeader = document.createElement("div");
const timer = document.createElement("div");
const timerCount = document.createElement("p");

const min = document.createElement("div");
const minText = document.createElement("p");

const sec = document.createElement("div");
const secText = document.createElement("p");

const gameRestartButton = document.createElement("button");

gameHeader.classList.add("game-header");
timer.classList.add("timer");
min.classList.add("min");
minText.classList.add("min-text");
sec.classList.add("sec");
secText.classList.add("sec-text");
gameRestartButton.classList.add("game-restart");
gameRestartButton.classList.add("start-game-button");

gameHeader.appendChild(timer);
gameHeader.appendChild(gameRestartButton);
timer.appendChild(min);
min.appendChild(minText);
timer.appendChild(sec);
timer.appendChild(timerCount);
sec.appendChild(secText);

gameRestartButton.textContent = "Начать заново";
minText.textContent = "min";
secText.textContent = "sec";
timerCount.textContent = "00.00";
window.level = "1";

hardInputs.forEach((elem) => {
  elem.addEventListener("input", (event) => {
    window.level = elem.value;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  containeer.innerHTML = "";
  containeer.appendChild(gameHeader);
  if (window.level === "1") {
    console.log("1");
  } else if (window.level === "2") {
    console.log("2");
  } else {
    console.log("3");
  }
});
