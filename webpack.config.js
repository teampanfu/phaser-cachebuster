const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "cachebuster.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  externals: {
    phaser: {
      commonjs: "phaser",
      commonjs2: "phaser",
      amd: "phaser",
      root: "Phaser"
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "example")
    }
  }
};