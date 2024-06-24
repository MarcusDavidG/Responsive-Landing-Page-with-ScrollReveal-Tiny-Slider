// Initialize Tiny Slider
const slider = tns({
  container: ".my-slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  mouseDrag: true,
});

// Initialize ScrollReveal
ScrollReveal().reveal(".header", {
  duration: 1000,
  origin: "top",
  distance: "50px",
});

ScrollReveal().reveal(".carousel", {
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});

ScrollReveal().reveal(".content", {
  duration: 1000,
  origin: "left",
  distance: "50px",
});

ScrollReveal().reveal(".footer", {
  duration: 1000,
  origin: "right",
  distance: "50px",
});
