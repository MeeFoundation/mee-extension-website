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

export const header = {
  logoLink: meeFoundation,
  links: [
    {
      name: "Products",
      link: `${meeFoundation}products/`,
      id: "products",
    },
    {
      name: "Business",
      link: `${meeFoundation}for-providers/`,
      id: "business",
    },
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about",
    },
  ],
  rightLinks: [
    {
      name: "Join us",
      link: discord,
      icon: "discord",
      target: "_blank",
      id: "discord",
    },
  ],
  footerLinks: [
    {
      link: "/privacy-policy/",
      name: "Privacy",
      id: "privacy-policy",
    },
    {
      link: "/docs/",
      name: "Docs",
      id: "docs",
    },
  ],
};
export const footer = {
  links: [
    {
      link: "https://x.com/mee_foundation",
      icon: "twitter-x",
      target: "_blank",
    },
    {
      link: github,
      icon: "github",
      target: "_blank",
    },
    {
      link: discord,
      icon: "discord",
      target: "_blank",
    },
  ],
  rightLinks: [
    {
      name: "Products",
      link: `${meeFoundation}products/`,
      id: "products",
    },
    {
      name: "Business",

      link: `${meeFoundation}for-providers/`,
      id: "business",
    },
    {
      name: "About us",
      link: `${meeFoundation}about/`,
      id: "about",
    },
    {
      link: "/privacy-policy/",
      name: "Privacy",
      id: "privacy-policy",
    },
    {
      link: "/docs/",
      name: "Docs",
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  site: site,
  integrations: [tailwind()],
});
