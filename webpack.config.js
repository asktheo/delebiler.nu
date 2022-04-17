// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry:
  {
    stylesheet: path.resolve(__dirname, 'scss/custom.scss')
  },

  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.bootstrap-sass.js'
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
/*     new CopyWebpackPlugin({
      patterns: [
          { from: 'static' }
      ]
  }) */

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: { limit: 10000, mimetype: "application/font-woff" }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: { limit: 10000, mimetype: "application/octet-stream" }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.output.path = path.resolve(__dirname, 'dist');
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

  } else {
    config.mode = 'development';
  }
  return config;
};
