// Technologies //
const technoHead = document.getElementById("technoHead");
const para = document.getElementById("para");
const launch = document.getElementById("launch");
const Space = document.getElementById("Space");
const SpaceCapsule = document.getElementById("SpaceCapsule");

launch.addEventListener("click", () => {
  technoHead.innerHTML = "LAUNCH VEHICLE";
  para.innerHTML =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth`s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it`s quite an awe-inspiring sight on the launch pad! ";

  document.getElementById("technoImages").style.backgroundImage =
    "url('/images/image-launch-vehicle-portrait.jpg')";
  });
  
  Space.addEventListener("click", () => {
    technoHead.innerHTML = "SPACEPORT";
    para.innerHTML =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth`s rotation for launch.     ";
    document.getElementById("technoImages").style.backgroundImage =
      "url('/images/image-spaceport-portrait.jpg')";
    });
    
    SpaceCapsule.addEventListener("click", () => {
      technoHead.innerHTML = "SPACE CAPSULE";
      para.innerHTML =
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
      document.getElementById("technoImages").style.backgroundImage =
        "url('/images/image-space-capsule-portrait.jpg')";
});

// navbar
const hamburger = document.getElementById("hamburger");
const closeHambure = document.getElementById("closeHamburger");
hamburger.addEventListener("click", () => {
  document.getElementById("open").style.width = "50%";
});
closeHambure.addEventListener("click", () => {
  document.getElementById("open").style.width = "0%";
});
