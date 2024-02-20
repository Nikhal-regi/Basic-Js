const opnButton = document.querySelectorAll(".show-modal");
const clsButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const opn = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const cls = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < opnButton.length; i++)
  opnButton[i].addEventListener("click", opn);

clsButton.addEventListener("click", cls);
overlay.addEventListener("click", cls);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    cls();
  }
});
