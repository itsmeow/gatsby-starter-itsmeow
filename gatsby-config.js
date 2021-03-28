console.log("BUILD ON: " + process.env.NODE_ENV)
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `itsmeow Starter`,
    description: `its_meow's Gatsby Starter`,
    author: `itsmeow`,
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-0-1`,
        head: true,
        anonymize: false,
      },
    },
    `gatsby-plugin-image`,
    `babel-preset-gatsby`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `itsmeow Starter`,
        short_name: `itsmeow Starter`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `standalone`,
        icon: `src/data/icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
