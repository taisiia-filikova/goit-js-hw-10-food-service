const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};

// не забудь что у тебя рефы, указывай нормальный путь!

const currentTheme = localStorage.getItem('theme');

function themeChanging() {
  if (refs.themeSwitchToggle.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function saveCurrentTheme() {
  if (currentTheme) {
    refs.body.classList.add(currentTheme);
  } 
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.themeSwitchToggle.checked = true;
  }
}

refs.themeSwitchToggle.addEventListener('change', themeChanging);
saveCurrentTheme();