const hamburger = document.getElementById("hamburger");
const closeHambure = document.getElementById("closeHamburger");
hamburger.addEventListener("click", () => {
  document.getElementById("open").style.width = "50%";
});
closeHambure.addEventListener("click", () => {
  document.getElementById("open").style.width = "0%";
});
// text destination page //
const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");
const headings = document.getElementById("headinga");
const para = document.getElementById("para");
const kilometer = document.getElementById("kilometer");
const days = document.getElementById("days");

moon.addEventListener("click", () => {
  headings.innerHTML = "MOON";
  para.innerHTML =
    " See our planet as you`ve never seen it before. A perfect  relaxing trip away to help regain perspective and come back  refreshed. While you`re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  kilometer.innerHTML = "384,400 KM";
  days.innerHTML = "3 Days";
});
mars.addEventListener("click", () => {
  headings.innerHTML = "MARS";
  para.innerHTML =
    " Don`t forget to pack your hiking boots. You`ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It`s two and a half times the size of Everest!    ";
  kilometer.innerHTML = "225 MIL. KM";
  days.innerHTML = "9 MONTHS";
});
europa.addEventListener("click", () => {
  headings.innerHTML = "EUROPA";
  para.innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover`s dream. With an icy surface, it`s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  kilometer.innerHTML = "628 MIL. KM ";
  days.innerHTML = "3 YEARS";
});
titan.addEventListener("click", () => {
  headings.innerHTML = "TITAN";
  para.innerHTML =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  kilometer.innerHTML = "1.6 BIL. KM";
  days.innerHTML = "7 YEARS";
});
