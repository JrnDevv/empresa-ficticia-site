/* =========================================================
   Tech Cloud - JS (organizado)
   - Particles.js init
   - Typing button
   - CTA scroll
   - Mobile nav toggle
========================================================= */

(function () {
  "use strict";

  // ---------- Particles ----------
  function initParticles() {
    if (!window.particlesJS) return;
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: ["#1e90ff", "#00bfff", "#8a2be2"] },
        move: { speed: 2 },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#1e90ff",
          opacity: 0.4,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
      },
      retina_detect: true,
    });
  }

  // ---------- Typing ----------
  function initTyping() {
    const phrases = ["Comece agora"];
    const typingEl = document.getElementById("typing");
    if (!typingEl) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 90;
    const deleteSpeed = 45;
    const pauseEnd = 900;
    const pauseStart = 350;

    function tick() {
      const current = phrases[phraseIndex];

      if (!isDeleting) {
        typingEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isDeleting = true;
          return setTimeout(tick, pauseEnd);
        }
        return setTimeout(tick, typeSpeed);
      }

      typingEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        return setTimeout(tick, pauseStart);
      }

      return setTimeout(tick, deleteSpeed);
    }

    tick();
  }

  // ---------- CTA Scroll ----------
  function initCtaScroll() {
    const btn = document.getElementById("ctaScroll");
    const target = document.getElementById("servicos");
    if (!btn || !target) return;

    btn.addEventListener("click", () => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // ---------- Mobile Nav ----------
  function initMobileNav() {
    const toggle = document.querySelector(".nav__toggle");
    const list = document.getElementById("navList");
    if (!toggle || !list) return;

    toggle.addEventListener("click", () => {
      const isOpen = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Fecha menu ao clicar em link (mobile)
    list.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });

    // Fecha ao clicar fora
    document.addEventListener("click", (e) => {
      const clickedInsideNav = e.target.closest(".nav");
      if (!clickedInsideNav) {
        list.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---------- Boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initTyping();
    initCtaScroll();
    initMobileNav();
  });
})();

