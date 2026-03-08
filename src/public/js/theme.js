import { idbGet } from "./db.js";
import { THEME_KEY } from "./constants.js";

function resolveTheme(preference) {
  if (preference === "light" || preference === "dark") return preference;
  if (preference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return null;
}

export function applyTheme(preference) {
  const root = document.documentElement;
  const resolved = resolveTheme(preference);
  if (resolved === "light") {
    root.setAttribute("data-theme", "light");
  } else if (resolved === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
}

export async function initTheme() {
  const saved = await idbGet(THEME_KEY);
  if (saved) {
    try {
      localStorage.setItem(THEME_KEY, saved);
    } catch (_) {}
    applyTheme(saved);
  }
}
