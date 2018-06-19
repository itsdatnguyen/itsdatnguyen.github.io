const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  head: {
    title: "Dat Nguyen's Repository",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Github repository of website developer and game developer Dat Nguyen."
      },
      {
        'http-equiv': 'Content-Type',
        content: 'text/html',
        charset: 'utf-8'
      },
      { // open graph
        hid: 'og:description',
        property: "og:description",
        content: "Github repository of website developer and game developer Dat Nguyen."
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Dat Nguyen's Repository"
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://itsdatnguyen.github.io/'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Dat Nguyen's Repository"
      },
      { 
        hid: 'twitter:card', // twitter card
        name: 'twitter:card',
        content: 'Github repository of website developer and game developer Dat Nguyen.'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@itsdatnguyen'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "Dat Nguyen's Repository"
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Github repository of website developer and game developer Dat Nguyen.'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@itsdatnguyen'
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  css: ["~/assets/sass/index.sass"],
  build: {},
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js"
  ],
  axios: {}
}
