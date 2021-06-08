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
