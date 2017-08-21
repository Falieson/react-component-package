var path = require('path')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        use: 'jsx-loader'
      }
    ]
  }
}
