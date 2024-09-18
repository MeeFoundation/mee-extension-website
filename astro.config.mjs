import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

export const site = "https://meextension.org/";
export const meeFoundation = "https://mee.foundation/";
export const github = "https://github.com/MeeFoundation/browser-extensions/";
export const privateAdvertising = "https://private-advertising.mee.foundation/";
export const discord =
  "https://discord.com/channels/1275848491964436491/1275848492413223025";
export const extensionLink =
  "https://chromewebstore.google.com/detail/mee-extension-let-the-web/gfcagdccenaomgheadeimkfdfgkdapcf";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  site: site,
  integrations: [tailwind()],
});
