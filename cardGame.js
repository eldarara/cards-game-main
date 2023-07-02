const hardButton = document.querySelectorAll(".hard-level-select-button");

console.log(hardButton);
hardButton.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log("click^^");
  });
});
