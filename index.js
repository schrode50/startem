const server = require(__dirname + '/lib/server');
const router = require(__dirname + '/lib/router');

server.start(router.route);
