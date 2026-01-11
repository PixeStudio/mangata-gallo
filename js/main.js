function loadPartial(id, url) {
  const target = document.getElementById(id);
  if (!target) return;

  fetch(url)
    .then(res => res.text())
    .then(html => target.innerHTML = html);
}

function loadMain(url) {
  const main = document.getElementById("app");

  fetch(url)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;
      window.scrollTo(0, 0);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("site-header", "partials/header.html");
  loadPartial("site-footer", "partials/footer.html");
  loadMain("main.html");
});

document.addEventListener("click", e => {
  const link = e.target.closest("[data-page]");
  if (!link) return;

  e.preventDefault();
  loadMain(link.dataset.page);
});
