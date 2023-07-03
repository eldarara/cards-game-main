const hardButton = document.querySelectorAll(".hard-level-select-button");
const startButton = document.querySelector(".start-game-button");
const hardLevelElem = document.querySelector(".hard-level-elem");
const containeer = document.querySelector(".containeer");
console.log(hardButton);
startButton.addEventListener("click", (event) => {
  containeer.removeChild(hardLevelElem);
});
hardButton.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    let level = elem.textContent;
    if (level === "1") {
      elem.classList.add("clicked");
    } else if (level === "2") {
      elem.classList.add("clicked");
    } else {
      elem.classList.add("clicked");
    }
  });
});
