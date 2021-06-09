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
### package.json
use command `npm start`
```json
// ...
  "scripts": {
    "start": "webpack",
  },
// ...
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
### babel-loader
```shell
npm i -D babel-loader
npm i -D @babel/preset-env
npm i -D @babel/preset-reac
npm i core-js
npm i react react-dom
```
webpack.config.js
```js
// ...
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      },
// ...
```
index.js
```js
import React from 'react'
import ReactDom from 'react-dom'

const App = () => <h1>Hello!!</h1>

ReactDom.render(<App/>, document.getElementById('root'))
```