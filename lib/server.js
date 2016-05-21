'use strict';

const http = require('http');
const Router = require('./router');
const route = new Router();

const start = (route) => {
  const onRequest = (req, res) => {

  };

  http.createServer(onRequest).listen(8888);
  console.log('Server is up on port 8888');
};

exports.start = start;
