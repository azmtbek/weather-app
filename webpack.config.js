const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
   contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'dist'),
    ],
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/i,
        loader: "file-loader",
        options: { name: "[name].[ext]", publicPath: "public/" },
      },
      {
        test: /\.(png|j?g|svg|gif)?$/i,
        use: [
          {
            loader: "url-loader",
            options: { limit: false },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};
