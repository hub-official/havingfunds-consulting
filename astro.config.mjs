import { defineConfig } from "astro/config";

// Ganti dengan domain produksi setelah website dipublikasikan.
export default defineConfig({
  site: "https://www.havingfundsconsulting.com",
  output: "static",
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
