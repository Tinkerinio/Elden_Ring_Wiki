const themeSwitcher = document.getElementById('themeSwitcher');
const body = document.body;

// Check local storage for saved theme and apply it on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
    } else {
      // Default to day theme if no theme is saved
      body.classList.add('day');
    }
  };

// Toggle theme between day and night
themeSwitcher.addEventListener('click', function () {
    if (body.classList.contains('day')) {
      body.classList.remove('day');
      body.classList.add('night');
      localStorage.setItem('theme', 'night');
    } else {
      body.classList.remove('night');
      body.classList.add('day');
      localStorage.setItem('theme', 'day');
    }
  });