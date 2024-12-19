import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export const site = "https://meextension.org/";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: site,
  integrations: [tailwind()],
});
