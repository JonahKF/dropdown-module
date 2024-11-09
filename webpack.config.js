// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

const developmentConfig = {
  ...commonConfig,
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};

const productionConfig = {
  ...commonConfig,
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "dropdown", // Change this to your package name
      type: "umd", // Universal Module Definition
      export: "default",
    },
    globalObject: "this",
    clean: true,
  },
  externals: {
    // Add any dependencies you want to exclude from the bundle
  },
};

// Export different configs based on --mode flag
module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return developmentConfig;
  }
  return productionConfig;
};
