"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-tactile focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-background"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="relative h-4 w-7 rounded-full border border-border bg-subtle transition-colors group-hover:bg-sand">
        <span
          className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-forest transition-transform duration-300 ${
            theme === "dark" ? "translate-x-3.5" : "translate-x-0.5"
          }`}
        />
      </span>
      {theme}
    </button>
  );
}
