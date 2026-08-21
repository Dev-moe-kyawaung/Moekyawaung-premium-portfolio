document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("[data-language-toggle]");
  const elements = document.querySelectorAll("[data-en][data-my]");

  if (!button || !elements.length) return;

  let language = localStorage.getItem("moe-language") || "en";

  function render() {
    elements.forEach((element) => {
      element.textContent =
        language === "my"
          ? element.dataset.my
          : element.dataset.en;
    });

    button.textContent = language === "en" ? "မြန်မာ" : "EN";
    document.documentElement.lang = language === "en" ? "en" : "my";
  }

  render();

  button.addEventListener("click", () => {
    language = language === "en" ? "my" : "en";
    localStorage.setItem("moe-language", language);
    render();
  });
});
