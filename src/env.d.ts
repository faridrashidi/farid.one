declare global {
  type ThemePreference = "system" | "light" | "dark";

  interface ThemeController {
    applyTheme(theme: ThemePreference): void;
    getStoredTheme(): ThemePreference;
    setTheme(theme: ThemePreference): void;
  }

  interface Window {
    __themeController: ThemeController;
  }
}

export {};
