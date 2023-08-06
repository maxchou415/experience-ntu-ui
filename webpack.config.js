const webpack = require('webpack')
const path = require('path')
const glob = require('glob')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: glob.sync('./src/**/*.pcss').reduce((acc, file) => {
    const entryChunkName = path.basename(file, path.extname(file))
    acc[entryChunkName] = file

    return acc
  }, {}),
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          }
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(require('./utils/licenseGenerator')),
    new MiniCssExtractPlugin({
      filename: '[name].build.css'
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
