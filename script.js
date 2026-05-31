const revealElements = document.querySelectorAll(".gallery-piece, .about-section, .contact-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
