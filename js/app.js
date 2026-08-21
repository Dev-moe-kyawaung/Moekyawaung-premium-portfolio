document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initPageProgress();
  initTheme();
  initMobileMenu();
  initMagneticButtons();
  initCardTilt();
  initCounters();
  setCurrentYear();
});

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal, .reveal-scale, .stagger");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -45px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function initPageProgress() {
  const progress = document.querySelector(".page-progress");
  if (!progress) return;

  const update = () => {
    const total =
      document.documentElement.scrollHeight - window.innerHeight;

    const percent = total > 0
      ? (window.scrollY / total) * 100
      : 0;

    progress.style.width = `${percent}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  const saved = localStorage.getItem("moe-theme");

  if (saved === "light" || saved === "dark") {
    root.dataset.theme = saved;
  }

  const updateLabel = () => {
    if (!toggle) return;

    const isLight = root.dataset.theme === "light";
    toggle.textContent = isLight ? "☾" : "☼";
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  };

  updateLabel();

  toggle?.addEventListener("click", () => {
    root.dataset.theme =
      root.dataset.theme === "light" ? "dark" : "light";

    localStorage.setItem("moe-theme", root.dataset.theme);
    updateLabel();
  });
}

function initMobileMenu() {
  const menu = document.querySelector(".primary-nav");
  const button = document.querySelector("[data-menu-toggle]");

  if (!menu || !button) return;

  const close = () => {
    menu.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-menu-open");
  };

  button.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");

    button.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("is-menu-open", open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function initMagneticButtons() {
  const buttons = document.querySelectorAll("[data-magnetic]");

  buttons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform =
        `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

function initCardTilt() {
  const cards = document.querySelectorAll("[data-tilt]");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform =
        `perspective(900px)
         rotateX(${y * -4}deg)
         rotateY(${x * 4}deg)
         translateY(-8px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.counter || 0);
        const suffix = element.dataset.suffix || "";
        const start = performance.now();
        const duration = 1400;

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          element.textContent =
            `${Math.round(target * eased)}${suffix}`;

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.unobserve(element);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}
