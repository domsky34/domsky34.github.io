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
