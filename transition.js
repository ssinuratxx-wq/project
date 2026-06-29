// Animasi masuk (dari bawah ke atas)
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-enter');
  setTimeout(() => document.body.classList.add('page-enter-active'), 10);
});

// Animasi keluar sebelum pindah halaman
function goTo(url) {
  document.body.classList.add('page-exit');
  setTimeout(() => {
    window.location.href = url;
  }, 400);
}
