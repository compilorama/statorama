module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    library: 'Statorama',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: `${__dirname}/dist`,
    filename: 'statorama.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  resolve: {
    alias: {
      '@src': `${__dirname}/src/`
    }
  },
};
