document.getElementById('guestbook-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const popup = document.getElementById('popup');

  const response = await fetch('https://formspree.io/f/xwpqbeba', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    popup.classList.remove('hidden');
    form.reset();
    setTimeout(() => popup.classList.add('hidden'), 3000);
  } else {
    alert('Something went wrong!');
  }
});