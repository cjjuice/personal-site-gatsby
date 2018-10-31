module.exports = {
  siteMetadata: {
    title: 'C.J. Bordeleau - Software Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'C.J. Bordeleau',
        short_name: 'C.J.',
        start_url: '/',
        background_color: '#3F51B5',
        theme_color: '#FF4081',
        display: 'minimal-ui',
        icon: 'src/images/cj-logo-square.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-offline',
  ],
}
