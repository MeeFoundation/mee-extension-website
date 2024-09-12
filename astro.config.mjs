import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

export const site = "https://meextension.org/";
export const sharedConfig = {
  title: "Mee Extension",
  logo: {
    light: "/src/assets/logo-light.svg",
    dark: "/src/assets/logo-dark.svg",
    replacesTitle: true,
  },
};
// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  site: site,
  integrations: [
    starlight({
      ...sharedConfig,
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/meefoundation/docs/edit/develop/docs/",
      },
      social: {
        github: "https://github.com/MeeFoundation/browser-extensions",
      },
      customCss: process.env.NO_GRADIENTS ? [] : ["/src/assets/landing.css"],
      locales: {
        root: { label: "English", lang: "en" },
      },
      sidebar: [
        {
          label: "For Users",
          items: [
            {
              label: "Start Here",
              items: [
                {
                  label: "Getting Started",
                  link: "docs/users/getting-started",
                },
              ],
            },
          ],
        },
        {
          label: "For Developers",
          items: [
            {
              label: "Start Here",
              items: [
                {
                  label: "Getting Started",
                  link: "docs/developers/getting-started",
                },
              ],
            },
          ],
        },
      ],
      components: {
        Sidebar: "./src/components/MultiSidebar.astro",
        EditLink: "./src/components/EditLink.astro",
      },
    }),
    tailwind(),
  ],
});
