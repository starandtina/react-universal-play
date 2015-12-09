var path = require('path');

module.exports = {
  name: 'client',
  target: 'web',
  entry: path.join(process.cwd(), 'client.js'),
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel'
    }]
  }
}
