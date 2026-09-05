// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  legacy: {
    collectionsBackwardsCompat: true,
  },
  site: "https://farid.one",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Vazirmatn",
      cssVariable: "--font-vazirmatn",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["arabic", "latin"],
    },
  ],
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
