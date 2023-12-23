import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "",
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./src/assets/docs-logo.svg",
      },
      social:{
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/"
      }
    }),
  ],
});
