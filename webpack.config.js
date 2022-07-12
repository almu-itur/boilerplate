const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  target: "web", // compiling optimized for use of app
  devServer: {
    port: "9500",
    static: ["./public"], // where to find static files like images
    open: true, // open browser
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      // loaders run in inverse order (ts to tsx to jsx)
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
