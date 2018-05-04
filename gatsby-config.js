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
  //   {
  //     resolve: `gatsby-plugin-babel`,
  //     options: {
  //     ignore: ['foo.js', 'bar/**/*.js'],
  //   },
  // },
  ],
}
