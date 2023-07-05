const hardInputs = document.querySelectorAll(".hard-level-select-input");
const startButton = document.querySelector(".start-game-button");
const hardLevelElem = document.querySelector(".hard-level-elem");
const containeer = document.querySelector(".containeer");
const form = document.querySelector("form");

console.log(hardInputs);

hardInputs.forEach((elem) => {
  elem.addEventListener("input", (event) => {
    window.level = elem.value;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  containeer.removeChild(hardLevelElem);
});
