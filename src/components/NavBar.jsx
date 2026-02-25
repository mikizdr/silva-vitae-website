import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function navClassName({ isActive }) {
  return `${isActive ? "nav-link-active" : "hover:bg-slate-100 dark:hover:bg-slate-800"} rounded-md px-3 py-2`;
}

export default function NavBar() {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"));

  const themeLabel = useMemo(() => {
    return isDark ? "☀️ Svetli režim" : "🌙 Tamni režim";
  }, [isDark]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const darkEnabled = root.classList.toggle("dark");
    setIsDark(darkEnabled);
    try {
      localStorage.setItem("theme", darkEnabled ? "dark" : "light");
    } catch (error) {}
  };

  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NavLink to="/" className="text-lg font-semibold">
        Silva Vitae
      </NavLink>
      <div className="flex items-center gap-2 text-sm">
        <NavLink to="/" end className={navClassName}>
          Home
        </NavLink>
        <NavLink to="/about" className={navClassName}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClassName}>
          Contact
        </NavLink>
        <NavLink to="/docs" className={navClassName}>
          Docs
        </NavLink>
        <button type="button" onClick={toggleTheme} className="ml-2 rounded-md border border-slate-300 px-3 py-2 dark:border-slate-700">
          <span>{themeLabel}</span>
        </button>
      </div>
    </nav>
  );
}
