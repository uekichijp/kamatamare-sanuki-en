import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://kamatamare-sanuki-en.pages.dev",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404.html"),
    }),
  ],
});
