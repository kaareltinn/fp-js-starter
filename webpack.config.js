const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.test.js'],
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'src'),
    ],
    watchContentBase: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test:  /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  }
};
