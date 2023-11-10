const header = document.querySelector("header");
const picture = document.querySelector(".picture");
const BtnDiscover = document.querySelector(".BtnDiscover");
const formation = document.querySelector('.formation')
const competence = document.querySelector('.competence')


let parallaxForce = 15;

header.addEventListener("mousemove", (e) => {
  picture.style.backgroundPosition = `${50 + e.x / parallaxForce}% -${80 + e.y / (parallaxForce * parallaxForce)}vh`;
  picture.style.transition = "0s";
});

header.addEventListener("mouseout", (e) => {
  picture.style.backgroundPosition = "50% -80vh";
  picture.style.transition = "0.5s";
});

BtnDiscover.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    left: 100,
    behavior: "smooth",
  });
});

let sdd = window.innerHeight/(window.innerHeight/5)

window.addEventListener("scroll", () => {
  if (window.scrollY < window.innerHeight) {
    console.log(window.scrollY);
    formation.style.transform = `translate(-${window.innerHeight/sdd - window.scrollY/sdd}%)`
    competence.style.transform = `translate(${window.innerHeight/sdd - window.scrollY/sdd}%)`
  } else {
    console.log('down !');
  }
})

window.addEventListener("DOMContentLoaded", () => {
  formation.style.transform = `translate(-${window.innerHeight/sdd}%)`
  competence.style.transform = `translate(${window.innerHeight/sdd}%)`
})