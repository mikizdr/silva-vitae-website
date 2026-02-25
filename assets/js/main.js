(() => {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const labels = document.querySelectorAll('[data-theme-label]');

  const setThemeLabel = () => {
    const isDark = root.classList.contains('dark');
    labels.forEach((label) => {
      label.textContent = isDark ? '☀️ Svetli režim' : '🌙 Tamni režim';
    });
  };

  setThemeLabel();

  if (!toggles.length) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (error) {
        console.log(error);
      }
      setThemeLabel();
    });
  });
})();
