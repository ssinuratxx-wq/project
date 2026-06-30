const API = 'https://partly-easter-flashing.ngrok-free.dev';

document.getElementById('btnLogin').addEventListener('click', async () => {
  const inputUser = document.getElementById('inputUser').value.trim();
  const inputPass = document.getElementById('inputPass').value.trim();
  const errorMsg  = document.getElementById('errorMsg');

  errorMsg.style.display = 'none';

  if (!inputUser || !inputPass) {
    errorMsg.textContent = 'Username dan password wajib diisi!';
    errorMsg.style.display = 'block';
    return;
  }

  try {
    const res = await fetch(`${API}/login?ngrok-skip-browser-warning=true`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: inputUser, password: inputPass })
    });
    const data = await res.json();

    if (data.success) {
      sessionStorage.setItem('loggedUser', JSON.stringify(data.user));
      if (data.user.role === 'owner') {
        goTo('owner.html');
      } else {
        goTo('home.html');
      }
    } else {
      errorMsg.textContent = data.error || 'Username atau password salah!';
      errorMsg.style.display = 'block';
    }
  } catch (err) {
    errorMsg.textContent = 'Gagal konek ke server, coba lagi!';
    errorMsg.style.display = 'block';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('btnLogin').click();
  }
});
