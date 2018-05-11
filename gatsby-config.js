module.exports = {
  pathPrefix: `/carmelladimella`,
  siteMetadata: {
    title: 'Carmella DiMella',
  },
  plugins: ['gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-sass`,
      options: {
      precision: 8,
      },   
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ],
}
