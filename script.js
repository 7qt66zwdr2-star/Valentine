// Navigation entre les écrans
function nextScreen(n) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(`screen${n}`).classList.add('active');
}

// Quand elle clique OUI
function yes() {
  // Affiche l’écran final
  nextScreen(4);

  // Lancer l’effet pétillant
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#e2556b', '#f6c1cc', '#fff7f9']
  });

  // Attendre 1,2 seconde avant WhatsApp
  setTimeout(() => {
    const message = encodeURIComponent(
      "Coucou 😊 j’ai cliqué sur OUI 💖"
    );

    window.open(
      "https://wa.me/91052676?text=" + message,
      "_blank"
    );
  }, 1200);
}

// Quand elle clique NON
function no() {
  // Petite pause aussi (cohérent)
  setTimeout(() => {
    const message = encodeURIComponent(
      "Coucou 😊 j’ai cliqué sur NON 🤍"
    );

    window.open(
      "https://wa.me/NUMERO?text=" + message,
      "_blank"
    );
  }, 600);
}