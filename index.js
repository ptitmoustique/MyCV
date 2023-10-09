const welcomes = document.querySelector(".welcomes");
const picture = document.querySelector(".picture");

let parallaxForce = 15;

welcomes.addEventListener("mousemove", (e) => {
  picture.style.backgroundPosition = `${50 + e.x / parallaxForce}% -${
    80 + e.y / (parallaxForce * parallaxForce)
  }vh`;
  picture.style.transition = "0s";
});

welcomes.addEventListener("mouseout", (e) => {
  picture.style.backgroundPosition = "50% -80vh";
  picture.style.transition = "0.5s";
});
