document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#skills-grid");
  const filters = document.querySelector("#skill-filters");

  if (!grid) return;

  const skills = PORTFOLIO_DATA.skills;
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  let activeCategory = "All";

  function renderFilters() {
    if (!filters) return;

    filters.innerHTML = categories
      .map(
        (category) => `
          <button
            class="filter-button ${category === activeCategory ? "is-active" : ""}"
            type="button"
            data-category="${category}"
          >
            ${category}
          </button>
        `
      )
      .join("");

    filters.querySelectorAll("[data-category]").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        renderFilters();
        renderSkills();
      });
    });
  }

  function renderSkills() {
    const visibleSkills =
      activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    grid.innerHTML = visibleSkills
      .map(
        (skill) => `
          <article class="skill-card reveal is-visible" data-tilt>
            <div class="skill-icon">${skill.icon}</div>
            <span class="eyebrow">${skill.category}</span>
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>

            <div class="skill-bar">
              <span data-level="${skill.level}"></span>
            </div>

            <div class="skill-level">
              <span>Production confidence</span>
              <strong>${skill.level}%</strong>
            </div>

            <div class="tag-list">
              ${skill.tags
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join("")}
            </div>
          </article>
        `
      )
      .join("");

    requestAnimationFrame(() => {
      grid.querySelectorAll("[data-level]").forEach((bar) => {
        bar.style.width = `${bar.dataset.level}%`;
      });
    });
  }

  renderFilters();
  renderSkills();
});
