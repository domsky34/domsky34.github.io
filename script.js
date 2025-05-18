document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  const text = "Don-Styron FRAGONARD – Cybersecurity | Pentest | DevSecOps";

  // Sécurité : si l'élément existe bien
  if (!typewriter) return;

  const isMobile = window.innerWidth <= 600;

  if (isMobile) {
    // Affiche directement sur mobile
    typewriter.textContent = text;
  } else {
    // Effet machine à écrire sur écran large
    let i = 0;
    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    }
    type();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Effet typewriter (garde ton code ici si déjà présent)

  // Observer pour apparition fluide
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Ne l'observe plus une fois visible
      }
    });
  }, {
    threshold: 0.15
  });

  // Cible toutes les sections et blocs
  document.querySelectorAll(".section, .skill-block").forEach(el => {
    observer.observe(el);
  });
});
