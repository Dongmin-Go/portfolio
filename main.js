var cateBnt = document.querySelectorAll(".category__btn");
addEventListener("click", addActive);

function addActive() {
  cateBnt.classList.add("active");
}

function init() {
  addActive();
}

init();
