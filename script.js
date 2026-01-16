// Navigation entre les écrans
function nextScreen(n) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(`screen${n}`);
  if (target) {
    target.classList.add('active');
  }
}

// Lancer l’audio après interaction utilisateur
function startAudio() {
  const audio = document.getElementById("loveAudio");
  if (audio) {
    audio.volume = 0.7;
    audio.play().catch(() => {
      console.log("Lecture audio bloquée");
    });
  }
}

// Quand elle clique OUI
function yes() {
  nextScreen(4);

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#e2556b', '#f6c1cc', '#fff7f9']
  });

  setTimeout(() => {
    const message = encodeURIComponent("Coucou 😊 j’ai cliqué sur OUI 💖");
    window.open("https://wa.me/91052676?text=" + message, "_blank");
  }, 1200);
}

// Quand elle clique NON
function no() {
  setTimeout(() => {
    const message = encodeURIComponent("Coucou 😊 j’ai cliqué sur NON 🤍");
    window.open("https://wa.me/91052676?text=" + message, "_blank");
  }, 600);
}
