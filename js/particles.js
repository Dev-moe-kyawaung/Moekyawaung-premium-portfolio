document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("#particle-canvas");

  if (!canvas) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) return;

  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    particles = Array.from(
      { length: Math.min(65, Math.floor(width / 20)) },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.8 + 0.4
      })
    );
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) {
        particle.vx *= -1;
      }

      if (particle.y < 0 || particle.y > height) {
        particle.vy *= -1;
      }

      context.beginPath();
      context.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );
      context.fillStyle = "rgba(168,108,255,.42)";
      context.fill();
    });

    particles.forEach((first, firstIndex) => {
      particles.slice(firstIndex + 1).forEach((second) => {
        const dx = first.x - second.x;
        const dy = first.y - second.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 125) return;

        context.beginPath();
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
        context.strokeStyle =
          `rgba(168,108,255,${0.12 * (1 - distance / 125)})`;
        context.lineWidth = 0.6;
        context.stroke();
      });
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
});
