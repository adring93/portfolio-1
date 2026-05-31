const revealElements = document.querySelectorAll(".gallery-piece, .about-section, .contact-card, .article-frame, .article-panel");

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
