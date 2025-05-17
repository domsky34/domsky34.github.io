
document.addEventListener("DOMContentLoaded", () => {
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
});
