const hamburger = document.getElementById("hamburger");
const closeHambure = document.getElementById("closeHamburger");
hamburger.addEventListener("click", () => {
  document.getElementById("open").style.width = "50%";
});
closeHambure.addEventListener("click", () => {
  document.getElementById("open").style.width = "0%";
});
 