const path = require('path')

module.exports = {
  entry: {
    base: './_js/base.js',
    index: './_js/index.js',
    chart: './_js/chart.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js'
  }
}
