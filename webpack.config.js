const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[name]-[sha1:hash:7].[ext]'
          }
        }]
      },

      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
            name: '[name].[ext]'
          }
        }]
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      {
        test: /\.s[ca]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cool release',
      buildTime: new Date().toISOString(),
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[fullhash:7].css'
    })
  ]
}
