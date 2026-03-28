// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  legacy: {
    collectionsBackwardsCompat: true,
  },
  output: "server",
  site: "https://farid.one",
  vite: {
    plugins: [tailwindcss()],
  },
});
