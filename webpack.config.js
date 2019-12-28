const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  require("dotenv").config({
    path: `.env.${env}`
  });

  return {
    // mode: "production",
    entry: {
      main: "./src/index.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template-" + process.env.SUFFIX + ".html"
      })
    ],
    module: {
      rules: []
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist")
    }
  };
};
