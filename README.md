# webpack-sandbox
### Init
```shell
mkdir webpack-sandbox
cd webpack-sandbox/

npm init -y

git init
```
### WebPack
Install [WebPack](https://webpack.js.org/guides/getting-started/) 
```shell
npm install --save-dev webpack webpack-cli
# or
npm i -D webpack webpack-cli
```
Start WebPack: \
default start file: `src\index.js` \
default mode: production
```shell
npx webpack
npx webpack --mode development
```
### webpack.config.js
```js
module.exports = {
  mode: "development"
}
```
### file-loader
```shell
npm i -D file-loader
```
webpack.config.js
```js
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[name]-[sha1:hash:7].[ext]'
          }
        }]
      }
    ]
  }
}
```
index.js
```js
import img from './react.png'

const el = document.createElement('img')
el.src = img
document.body.appendChild(el)
```