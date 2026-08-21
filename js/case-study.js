document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("[data-case-title]");
  const description = document.querySelector("[data-case-description]");
  const stack = document.querySelector("[data-case-stack]");

  if (!title || !description || !stack) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("project") || "finora";

  const project = PORTFOLIO_DATA.projects.find(
    (item) => item.id === projectId
  );

  if (!project) return;

  title.textContent = project.title;
  description.textContent = project.description;

  stack.innerHTML = project.stack
    .map((item) => `<span class="tag">${item}</span>`)
    .join("");
});
