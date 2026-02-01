function showForm() {
    document.getElementById('cta-btn').style.display = 'none';
    document.getElementById('email-form').style.display = 'block';
}

// Dark Mode Toggle
const themeSwitch = document.querySelector('#checkbox');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme + '-mode');
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
        document.body.classList.add('dark-mode');
    }
}