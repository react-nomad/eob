/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: '@builder.io/gatsby',
      options: {
        publicAPIKey: '66313bf876ff4c01a4bc2507a1f91591',
        templates: {
          page: path.resolve('src/templates/page.js'),
        },
      },
    },
    'gatsby-plugin-postcss',
  ],
}
