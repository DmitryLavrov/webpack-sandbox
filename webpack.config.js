module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
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
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },

      {
        test: /\.s[ca]ss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }

    ]
  }
}
