document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#projects-grid");
  const filters = document.querySelector("#project-filters");

  if (!grid) return;

  const projects = PORTFOLIO_DATA.projects;
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  let activeCategory = "All";

  function renderFilters() {
    if (!filters) return;

    filters.innerHTML = categories
      .map(
        (category) => `
          <button
            type="button"
            class="filter-button ${
              category === activeCategory ? "is-active" : ""
            }"
            data-project-category="${category}"
          >
            ${category}
          </button>
        `
      )
      .join("");

    filters.querySelectorAll("[data-project-category]").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.projectCategory;
        renderFilters();
        renderProjects();
      });
    });
  }

  function renderProjects() {
    const visible =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    grid.innerHTML = visible
      .map(
        (project) => `
          <article class="project-card ${
            project.featured ? "featured" : ""
          }" data-tilt>
            <div class="project-cover ${project.coverClass}">
              <span class="project-cover-label">
                ${project.category}
              </span>
            </div>

            <div class="project-body">
              <div class="project-meta">
                <span>${project.year}</span>
                <span>${project.category}</span>
              </div>

              <h3>${project.title}</h3>
              <p>${project.description}</p>

              <div class="tag-list">
                ${project.stack
                  .map((item) => `<span class="tag">${item}</span>`)
                  .join("")}
              </div>

              <a
                class="text-link"
                href="case-study.html?project=${project.id}"
              >
                Explore case study →
              </a>
            </div>
          </article>
        `
      )
      .join("");
  }

  renderFilters();
  renderProjects();
});
