document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const message = document.querySelector("#form-message");

  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const details = formData.get("message")?.trim();

    if (!name || !email || !details) {
      message.textContent =
        "Please complete your name, email, and project details.";
      message.className = "form-message is-visible error";
      return;
    }

    message.textContent =
      "Thanks. Your message is ready to be connected to a form service.";
    message.className = "form-message is-visible success";
    form.reset();
  });
});
