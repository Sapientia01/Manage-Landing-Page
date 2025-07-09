const humbarger = document.querySelector(".humbarger");
const menu = document.querySelector(".menu");

humbarger.addEventListener("click", () => {
  humbarger.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
});
