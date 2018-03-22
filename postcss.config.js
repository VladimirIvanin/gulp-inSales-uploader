var syntax = require('postcss-scss');

module.exports = {
  plugins: [
    require('autoprefixer')()
  ],
  parser: syntax,
  map: false,
  syntax: "postcss-scss"
}
