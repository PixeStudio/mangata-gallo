function loadPartial(id, url) {
  const target = document.getElementById(id);
  if (!target) return;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then(html => {
      target.innerHTML = html;
      setActiveNavLink();
    })
    .catch(err => console.error(err));
}

function setActiveNavLink() {
  const current = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.header__nav-link').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('header__nav-link--active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('site-header', 'partials/header.html');
  loadPartial('site-footer', 'partials/footer.html');
});
