let elevator = document.querySelector("#elevator");
let floors = document.getElementsByClassName("floors");
let audio1 = document.querySelector("#sound-1");
let audio2 = document.querySelector("#sound-2");
let audio3 = document.querySelector("#sound-3");
let audio4 = document.querySelector("#sound-4");
let audio5 = document.querySelector("#sound-5");
let audio6 = document.querySelector("#sound-6");
let audio7 = document.querySelector("#sound-7");
let audio8 = document.querySelector("#sound-8");
let audio9 = document.querySelector("#sound-9");
let audio10 = document.querySelector("#sound-10");
let audio11 = document.querySelector("#sound-11");
let audio12 = document.querySelector("#sound-12");
let audio13 = document.querySelector("#sound-13");
let audio14 = document.querySelector("#sound-14");
let audio15 = document.querySelector("#sound-15");
let audio16 = document.querySelector("#sound-16");

let floor = 0;
function clicker() {
  elevator.style.bottom = `${floor}px`;
  elevator.style.transition = "3s";
}
for (let key of floors) {
  for (let item of key.children) {
    item.addEventListener("click", () => {
      if (item.id === "first-floor") {
        audio1.play();
        floor = 205;
        clicker();
      } else if (item.id === "second-floor") {
        floor = 230;
        audio2.play();
        clicker();
      } else if (item.id === "third-floor") {
        audio3.play();
        floor = 255;
        clicker();
      } else if (item.id === "fourth-floor") {
        audio4.play();
        floor = 280;
        clicker();
      } else if (item.id === "fifth-floor") {
        audio5.play();
        floor = 300;
        clicker();
      } else if (item.id === "sixth-floor") {
        audio6.play();
        floor = 325;
        clicker();
      } else if (item.id === "seventh-floor") {
        audio7.play();
        floor = 350;
        clicker();
      } else if (item.id === "eights-floor") {
        floor = 372;
        audio8.play();
        clicker();
      } else if (item.id === "nineth-floor") {
        audio9.play();
        floor = 395;
        clicker();
      } else if (item.id === "tens-floor") {
        audio10.play();
        floor = 418;
        clicker();
      } else if (item.id === "eleventh-floor") {
        audio11.play();
        floor = 443;
        clicker();
      } else if (item.id === "twelfth-floor") {
        audio12.play();
        floor = 464;
        clicker();
      } else if (item.id === "thirteenth-floor") {
        audio13.play();
        floor = 488;
        clicker();
      } else if (item.id === "forteens-floor") {
        audio14.play();
        floor = 511;
        clicker();
      } else if (item.id === "fifteenth-floor") {
        audio15.play();
        floor = 534;
        clicker();
      } else if (item.id === "sixteenth-floor") {
        audio16.play();
        floor = 558;
        clicker();
      }
    });
  }
}
