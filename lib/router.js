'use strict';

const Router = module.exports = () => {
  this.routes = {};
};

Router.prototype.get = (url, cb) => {
  if(!this.routes.GET) this.routes.Get = {};
  this.routes.GET[url] = cb;
};

Router.prototype.post = () => {
  if(!this.routes.POST) this.routes.Post = {};
  this.routes.POST[url] = cb;
};
