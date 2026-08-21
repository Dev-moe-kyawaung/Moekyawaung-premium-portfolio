(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("moe-theme");

  if (stored === "light" || stored === "dark") {
    root.dataset.theme = stored;
  }
})();
