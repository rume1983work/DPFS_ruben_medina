
document.querySelectorAll('.tab-link').forEach(button => {
  button.addEventListener('click', () => {
    // Activar el tab
    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Mostrar el contenido correspondiente
    const target = button.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});
