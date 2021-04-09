module.exports = {
  siteMetadata: {
    title: `MudMuseum`,
    description: `MudMuseum is a project meant to describe, archive, and make available Multi-User Dungeons (MUDs) that have been released to the public over the last 50 years.`,
    keywords: [`mud`, `mudmuseum`, `museum`, `mmo`, `archive`],
    author: `Nicholas Warner`,
    siteUrl: `https://mudmuseum.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `About MudMuseum`,
        link: `/aboutmudmuseum/`,
        location: `left`,
      },
      {
        name: `Connect`,
        link: `/#connect`,
        location: `right`,
      },
      {
        name: `History`,
        link: `/history/`,
        location: `right`,
      },
      {
        name: `Modern Muds`,
        link: `/modernmuds/`,
        location: `right`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1/`,
          },
          {
            name: `Sub 2`,
            link: `/sub-2/`,
          },
        ],
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `nswarner2@gmail.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `LinkedIn`,
        link: `https://www.linkedin.com/in/nswarner`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/mudmuseum`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // useKatex: false,
        // remarkImagesWidth: 1440,
        // imageQuality: 50,
        // useAlertBanner: false,
      },
    },
    {
      resolve: `gatsby-theme-catalyst-header-top`,
      options: {
        // Default options are
        // useStickyHeader: true,
        // useHeaderSocialLinks: true,
        // useColorMode: true
      },
    },
    {
      resolve: `gatsby-theme-catalyst-footer`,
      options: {
        // Default options are
        // useFooterSocialLinks: true,
        // footerContentLocation: "left", // "left", "right", "center"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
