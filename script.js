document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  const text = "Don-Styron FRAGONARD – Cybersecurity | Pentest | DevSecOps";

  if (window.innerWidth > 600) {
    let i = 0;
    function type() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }
    type();
  } else {
    typewriter.textContent = text;
  }
});
