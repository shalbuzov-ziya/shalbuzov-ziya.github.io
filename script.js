const toggle = document.getElementById('themeToggle');
const body = document.body;

const setTheme = (theme) => {
  body.setAttribute('data-theme', theme);
  toggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', theme);
};

setTheme(localStorage.getItem('theme') || 'light');

toggle.addEventListener('click', () => {
  const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
