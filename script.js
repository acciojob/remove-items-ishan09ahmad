let selectEl = document.querySelector("#colorSelect");
let buttonEl = document.querySelector(".input");
buttonEl.addEventListener("click", () => {
  let index = selectEl.selectedIndex;
  if (index !== -1) {
    selectEl.remove(selectEl.childNodes[index]);
  }
});
