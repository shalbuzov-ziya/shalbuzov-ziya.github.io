const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

const applyTheme = (theme) => {
  html.setAttribute("data-theme", theme);
  toggle.innerHTML = theme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem("theme", theme);
};

// Default to Dark Mode for security aesthetic
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

toggle.onclick = () => {
  const current = html.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
};
