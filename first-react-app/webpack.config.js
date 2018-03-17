module.exports = {
  entry: [
    __dirname + '/app/src/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }	
    ]
  },
  output: {
    path: __dirname + '/target',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/app/src/'
  }
};
