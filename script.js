const revealElements = document.querySelectorAll(
  ".gallery-piece, .contact-card, .article-frame, .article-panel, .skill-card, .small-piece, .process-list article, .home-showcase-grid article, .home-skills-preview, .about-highlight"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

const copyButtons = document.querySelectorAll("[data-copy-link]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showCopyMessage("Link copied");
    } catch {
      showCopyMessage("Could not copy link");
    }
  });
});

function showCopyMessage(message) {
  const oldMessage = document.querySelector(".copy-success");

  if (oldMessage) {
    oldMessage.remove();
  }

  const messageElement = document.createElement("div");
  messageElement.className = "copy-success";
  messageElement.textContent = message;

  document.body.appendChild(messageElement);

  window.setTimeout(() => {
    messageElement.remove();
  }, 2200);
}
