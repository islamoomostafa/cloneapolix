export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
}

////

const cardsContainer = document.querySelector(".cards");
let isDown = false;
let startX;
let scrollLeft;

cardsContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - cardsContainer.offsetLeft;
  scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener("mouseleave", () => {
  isDown = false;
});

cardsContainer.addEventListener("mouseup", () => {
  isDown = false;
});

cardsContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardsContainer.offsetLeft;
  const walk = (x - startX) * 50;
  cardsContainer.scrollLeft = scrollLeft - walk;
});

///////////////

const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");

let counter = 1;
const slideWidth = slides[0].clientWidth + 10;
const totalWidth = slideWidth * slides.length;

function nextSlide() {
  if (counter >= slides.length) {
    counter = 0;
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = `translateX(-${totalWidth}px)`;
    setTimeout(() => {
      sliderContainer.style.transition = "transform 0.5s ease-in-out";
      counter++;
      sliderContainer.style.transform = `translateX(-${
        slideWidth * counter
      }px)`;
    }, 0);
  } else {
    sliderContainer.style.transform = `translateX(-${slideWidth * counter}px)`;
    counter++;
  }
}

setInterval(nextSlide, 2000);

//////////

const moonImage = document.querySelector(
  ".about-wrapper__image img:last-child"
);

//
