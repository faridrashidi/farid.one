declare global {
  type ThemePreference = "system" | "light" | "dark";
  type ResolvedTheme = "light" | "dark";

  interface ThemeController {
    applyTheme(theme: ThemePreference): ResolvedTheme;
    getResolvedTheme(theme?: ThemePreference): ResolvedTheme;
    getTheme(): ThemePreference;
    setTheme(theme: ThemePreference): ResolvedTheme;
  }

  interface Window {
    __themeController: ThemeController;
  }
}

interface ImportMetaEnv {
  readonly GITHUB_API_TOKEN?: string;
}

export {};
