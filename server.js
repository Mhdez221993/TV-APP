const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const cors = require('cors');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

app.use(
  webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
      }),
  cors(
    {credentials: true,}
  )
);


app.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', function (req, res) {

  res.header("Access-Control-Allow-Origin", "*");
  res.send('hello world')
})


// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});