module.exports = {
  entry:'./src/index.jsx',
  output: {
      path: __dirname + '/public/js',
      filename:'bundle.js'
  },
  module:{
      rules:[
          {
              use: 'babel-loader',
              test:/\.jsx$/,
              exclude:/node_modules/
          }
      ]
  }

}