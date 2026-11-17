document.addEventListener("DOMContentLoaded", () => {
  // Home page button interaction
  const welcomeBtn = document.getElementById("welcomeBtn");
  const message = document.getElementById("message");

  if (welcomeBtn && message) {
    welcomeBtn.addEventListener("click", () => {
      message.textContent = "JavaScript is connected and running properly!";
    });
  }

  // Contact page form submission handler
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      formFeedback.textContent = `Thanks, ${name}! Your message has been recorded.`;
      contactForm.reset();
    });
  }
});


