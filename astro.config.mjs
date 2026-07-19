// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://matenlumo.com",
  integrations: [sitemap()],
  markdown: {
    // 白基調のサイトに合わせ、コードブロックも明色テーマで統一する
    shikiConfig: { theme: "github-light" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
