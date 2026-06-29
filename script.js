const users = [
  { username: "sopar", password: "SOPAR180909", role: "owner" },
  { username: "member1", password: "pass1", role: "member" }
];

document.getElementById('btnLogin').addEventListener('click', () => {
  const inputUser = document.getElementById('inputUser').value.trim();
  const inputPass = document.getElementById('inputPass').value.trim();
  const errorMsg  = document.getElementById('errorMsg');

  const found = users.find(u => u.username === inputUser && u.password === inputPass);

  if (found) {
    errorMsg.style.display = 'none';
    // Simpan data user buat ditampilkan di halaman berikutnya
    sessionStorage.setItem('loggedUser', JSON.stringify(found));
    if (found.role === 'owner') {
      goTo('owner.html');
    } else {
      goTo('home.html');
    }
  } else {
    errorMsg.style.display = 'block';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('btnLogin').click();
  }
});
