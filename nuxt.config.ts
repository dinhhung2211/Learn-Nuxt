// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  css: ["~/assets/scss/main.scss"],
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
});
