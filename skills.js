<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skills Matrix — Moe Kyaw</title>
  <meta name="description" content="Interactive technical skills matrix for Moe Kyaw.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/responsive.css">
  <link rel="stylesheet" href="css/accessibility.css">
  <script src="js/theme.js"></script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="page-progress"></div>

  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand"><span class="brand-mark">M</span><span>Moe Kyaw</span></a>

      <nav class="primary-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="skills.html">Skills</a>
        <a href="projects.html">Projects</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>
      </nav>

      <div class="header-actions">
        <button class="icon-button" data-theme-toggle aria-label="Switch theme">☼</button>
        <button class="menu-button" data-menu-toggle aria-expanded="false">☰</button>
      </div>
    </div>
  </header>

  <main id="main-content">
    <section class="case-hero">
      <div class="container">
        <span class="eyebrow">Interactive technical profile</span>
        <h1>Skills with context, not just percentages.</h1>
        <p class="case-lead">
          Explore the technologies, patterns, and practices I use to design,
          build, and ship reliable products.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div id="skill-filters" class="skill-filter reveal"></div>
        <div id="skills-grid" class="grid grid-auto stagger reveal"></div>
      </div>
    </section>

    <section class="section">
      <div class="container glass-card reveal">
        <div class="section-heading">
          <span class="eyebrow">Engineering philosophy</span>
          <h2>A skill is valuable when it improves the product.</h2>
        </div>

        <div class="grid grid-3">
          <div>
            <h3>Build</h3>
            <p style="margin-top:.7rem;color:var(--text-500);">
              Use the right abstractions without hiding the real behavior.
            </p>
          </div>

          <div>
            <h3>Measure</h3>
            <p style="margin-top:.7rem;color:var(--text-500);">
              Validate quality through tests, monitoring, and performance data.
            </p>
          </div>

          <div>
            <h3>Improve</h3>
            <p style="margin-top:.7rem;color:var(--text-500);">
              Refine the experience through feedback and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-bottom">
      <span>© <span data-year></span> Moe Kyaw</span>
      <a href="projects.html" class="text-link">See selected work →</a>
    </div>
  </footer>

  <script src="js/data.js"></script>
  <script src="js/app.js"></script>
  <script src="js/navigation.js"></script>
  <script src="js/skills.js"></script>
</body>
</html>
