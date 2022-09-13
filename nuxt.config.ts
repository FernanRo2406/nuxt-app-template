import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
    publicPath: "",
  },
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
      },
    ],
  ],
});
