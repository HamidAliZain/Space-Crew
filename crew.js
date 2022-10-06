// crew text change element //
const crewPara = document.getElementById("crew-para");
const crewHead = document.getElementById("crewHead");
const crewProfessions = document.getElementById("crewProfessions");

// ----> ourcrew <---- //
const didlous = document.getElementById("DOUGLAS ");
const Mark = document.getElementById("Mark");
const Vicky = document.getElementById("Vicky");
const ANOUSHEH = document.getElementById("ANOUSHEH");
didlous.addEventListener("click", () => {
  crewProfessions.innerHTML = "COMMANDER";
  crewHead.innerHTML = "DOUGLAS HURLEY ";
  crewPara.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
});
Mark.addEventListener("click", () => {
  crewProfessions.innerHTML = "MISSION SPECIALIST";
  crewHead.innerHTML = `MARK SHUTTLEWORTH`;
  crewPara.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
});
Mark.addEventListener("click", () => {
  crewProfessions.innerHTML = "PILOT";
  crewHead.innerHTML = `VICTOR GLOVER`;
  crewPara.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. N    avy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
});
ANOUSHEH.addEventListener("click", () => {
  crewProfessions.innerHTML = "FLIGHT ENGINEER ";
  crewHead.innerHTML = `VICTOR GLOVER `;
  crewPara.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ";
});
