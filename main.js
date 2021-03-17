// tady je místo pro náš program


let text = document.querySelector(".veta");

//při najetí ztuční písmo

function priNajeti() {
  text.classList.toggle("tucne");
}

//při kliknutí text zčervená

function cerveny() {
  text.classList.toggle("red");
}

//při kliknutí se text zvětší 

let aktualniVelikost = 16;
text.style.fontSize = aktualniVelikost + "px";

function zvetsi() {
  ++aktualniVelikost;
  text.style.fontSize = aktualniVelikost + "px";
}

//při kliknutí se spustí písnička 
//@param {string} elementSelector

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

//při kliknutí se pauzne písnička 
//@param {string} elementSelector

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

//při kliknutí se ztiší písnička 

function mute() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.volume = 0;
}

//při kliknutí bude mít zvuk střední hlasitost

function stredni() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.volume = 0.5;
}

//při kliknutí bude mít zvuk vysokou hlasitost

function zesil() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.volume = 1;
}

//písnička začne hrát od začátku

function zacatek() {
  let zvuk = document.querySelector("#zvuk");
  zvuk.currentTime = 0;
}