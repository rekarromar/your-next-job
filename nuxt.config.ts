// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ui: {
    icons: {
      dynamic: true,
    },
  },

  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/content"],

  colorMode: {
    preference: "dark",
  },
});
