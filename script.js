document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});
// Función para cargar un parcial y devolver una promesa
function loadPartial(id, file) {
  return fetch(`partials/${file}`)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

// Ejecutar cuando todo el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Cargar el header primero
  //await loadPartial("header-container", "header.html");

  // 2. Activar la funcionalidad del botón hamburguesa solo si el header ya está cargado
  const toggleBtn = document.getElementById("genre-toggle");
  const genreMenu = document.querySelector(".genre-menu");

  if (toggleBtn && genreMenu) {
    toggleBtn.addEventListener("click", () => {
      genreMenu.classList.toggle("show");
    });
  }

  // 3. Luego cargar el footer
  await loadPartial("footer-container", "footer.html");
});