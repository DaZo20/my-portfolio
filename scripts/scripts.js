
// Cambia el modo oscuro y el icono
function toggleDarkMode() {
    console.log('Clic en botón: alternando modo oscuro');
  const body = document.body;
  const toggleButton = document.querySelector('.mode-toggle');

  body.classList.toggle('dark-mode');

  // Actualiza el icono del botón
  updateToggleIcon(toggleButton, body.classList.contains('dark-mode'));

  // Guarda preferencia en localStorage
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Actualiza el ícono del botón según el modo
function updateToggleIcon(button, isDark) {
  button.textContent = isDark ? '☀️' : '🌕';
}

// Aplica el modo guardado (si existe)
function applySavedMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  const toggleButton = document.querySelector('.mode-toggle');

  document.body.classList.toggle('dark-mode', isDark);
  updateToggleIcon(toggleButton, isDark);
}

// Inicializa los eventos y estado
function initDarkModeToggle() {
  const toggleButton = document.querySelector('.mode-toggle');
  if (!toggleButton) return;

  applySavedMode();

  toggleButton.addEventListener('click', toggleDarkMode);
}

// Ejecuta cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initDarkModeToggle);
