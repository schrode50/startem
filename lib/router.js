const Router = module.exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DELETE': {},
    'PATCH': {}
  };

  Router.prototype.get = function(url, cb) {
    this.routes.GET[url] = cb;
    return this;
  };
};

Router.prototype.post = function(url, cb) {
  this.routes.POST[url] = cb;
  return this;
};

Router.prototype.put = function(url, cb) {
  this.routes.PUT[url] = cb;
  return this;
};

Router.prototype.delete = function(url, cb) {
  this.routes.DELETE[url] = cb;
  return this;
};

Router.prototype.patch = function(url, cb) {
  this.routes.PATCH[url] = cb;
  return this;
};

Router.prototype.route = function() {
  return function(req, res) {
    if(!this.routes[req.method]) {
      return bad(res);
    }
    if(!this.routes[req.method][req.url]) {
      return notFound(res);
    }
    this.routes[req.method][req.url](req, res);
    return send(req, res);
  };
};

function send(res) {
  res.send = function(str) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(str);
    res.end();
  };
}

function bad(res) {
  res.writeHead(400, { 'Content-Type': 'text/plain' } );
  console.log('BAD REQUEST');
  res.end();
}

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  console.log('NOT FOUND');
}

module.exports = Router;
