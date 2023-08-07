module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-import'),
    require('@csstools/postcss-design-tokens'),
    require('postcss-css-variables'),
    require('postcss-nesting'),
    require('postcss-each'),
    require('cssnano')
  ]
}
