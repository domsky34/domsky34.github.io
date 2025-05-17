document.addEventListener("DOMContentLoaded", () => {
  // Typewriter effect
  const typewriter = document.getElementById("typewriter");
  const text = "Don-Styron FRAGONARD – Cybersecurity | Pentest | DevSecOps";
  let i = 0;
  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();

  // Fade-in animation on scroll
  const animatedBlocks = document.querySelectorAll(".section, .skill-block");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedBlocks.forEach(block => observer.observe(block));
});
