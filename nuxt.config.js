import colors from "vuetify/es5/util/colors";

export default {
  // Deployment on github pag
  target: "static",
  router: {
    base: "/nm/",
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - nmport",
    title: "nmport",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/gsap.js", mode: "client", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: ["~/components", "~/components/svgs"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-gsap-module"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    // defaultAssets: false,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bluePaiload: "#5e99ff",
          graySkill: "#999",
        },
      },
    },
  },

  gsap: {
    /* Module Options */

    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },

    extraEases: {
      expoScaleEase: true,
    },
  },

  //font Loader
  fontLoader: {
    url: {
      custom: "https://rsms.me/inter/inter.css",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
