const hardInput = document.querySelectorAll(".hard-level-select-input");
const startButton = document.querySelector(".start-game-button");
const hardLevelElem = document.querySelector(".hard-level-elem");
const containeer = document.querySelector(".containeer");

hardInput.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    console.log(elem.value);
  });
});

startButton.addEventListener("click", (event) => {
  containeer.removeChild(hardLevelElem);
});
