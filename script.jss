/* ============================================
   Portfolio Website – Clean & Refined JavaScript
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. Typing Text Effect
     ========================= */
  const typingEl = document.querySelector(".typing-text");

  if (typingEl) {
    const texts = [
      "Graphic Designer",
      "Content Writer",
      "Music Producer",
      "Freelance Professional"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const holdDelay = 1500;

    function typeLoop() {
      const current = texts[textIndex];

      if (!deleting) {
        typingEl.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
          setTimeout(() => deleting = true, holdDelay);
        }
      } else {
        typingEl.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
          deleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      setTimeout(typeLoop, deleting ? deleteSpeed : typeSpeed);
    }

    typeLoop();
  }

  /* =========================
     2. Smooth Scroll
     ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* =========================
     3. Active Nav on Scroll
     ========================= */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navi a");

  window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach(section => {
      if (scrollY >= section.offsetTop - 80) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`
      );
    });
  });

  /* =========================
     4. Mobile Menu Toggle
     ========================= */
  const menuBtn = document.querySelector(".hamburg");
  const closeBtn = document.querySelector(".cancel");
  const navMenu = document.querySelector(".navi");

  if (menuBtn && closeBtn && navMenu) {
    menuBtn.onclick = () => navMenu.classList.add("open");
    closeBtn.onclick = () => navMenu.classList.remove("open");
  }

  /* =========================
     5. Section Fade-In
     ========================= */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll("section").forEach(sec => observer.observe(sec));
  }

  /* =========================
     6. Background Music
     ========================= */
  const bgMusic = new Audio("music.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.3;

  // Start music only after first user interaction (browser rule)
  const startMusic = () => {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", startMusic);
  };
  document.addEventListener("click", startMusic);

  /* Optional: expose controls */
  window.toggleMusic = () => {
    bgMusic.paused ? bgMusic.play() : bgMusic.pause();
  };

  /* =========================
     7. Contact Form Validation
     ========================= */
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name) return alert("Enter your name");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return alert("Enter valid email");
      if (!message) return alert("Enter your message");

      alert("Message sent successfully");
      form.reset();
    });
  }

  /* =========================
     8. Footer Year
     ========================= */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  console.log("Portfolio JS loaded successfully");
});
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.volume = 0.3;
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.volume = 0.3;
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}
const bgMusic = document.getElementById("bgMusic");

function toggleMusic() {
  if (!bgMusic) return;

  if (bgMusic.paused) {
    bgMusic.volume = 0.3;
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}
