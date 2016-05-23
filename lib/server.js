'use strict';

const http = require('http');

function start() {
  function onRequest(req, res) {
    if(req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('good job');
      // console.log(res);
      return res.end();
    }
  }
  http.createServer(onRequest).listen(8888);

  console.log('Server is up on port 8888');
}

exports.start = start;
