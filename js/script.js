const navbar = document.querySelector(".navbar");
const carousel = document.querySelector(".carousel-controls");

const sectionOption = {
  rootMargin: "-50px 0px 0px 0px",
};

const sectionObserver = new IntersectionObserver(function (entries, carousel) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.remove("on-scroll");
    } else {
      navbar.classList.add("on-scroll");
    }
  });
}, sectionOption);

sectionObserver.observe(carousel);

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const mouseCursor = document.querySelector(".cursor");
const button = document.querySelectorAll(".btn");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

button.forEach((btn) => {
  btn.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("btn-gow");
  });
  btn.addEventListener("mouseover", () => {
    mouseCursor.classList.add("btn-grow");
  });
});
