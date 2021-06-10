const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env = {}) => {
  console.log('env:', env)

  const {mode = 'development'} = env

  const isProd = mode === 'production'
  const isDev = mode === 'development'

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ]
  }

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Cool release',
        buildTime: new Date().toISOString(),
        template: 'public/index.html'
      })
    ]

    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[fullhash:7].css'
      }))
    }

    return plugins
  }

  return {

    mode: isProd ? 'production' : isDev && 'development',

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined
    },

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
          use: getStyleLoaders()
        },

        {
          test: /\.s[ca]ss$/,
          use: [...getStyleLoaders(), 'sass-loader']
        }

      ]
    },
    plugins: getPlugins(),
    devServer: {
      open: true
    }
  }
}
