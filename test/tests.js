const chai = require('chai');
const expect = chai.expect;
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const request = chai.request;
require (__dirname + '/../index');

const Router = require(__dirname + '/../lib/router');

const router = new Router();

const server = require(__dirname + '/../lib/server');

describe('testing router', () => {
  it('should test the router has methods', () => {
    expect(router.routes).to.have.property('GET');
    expect(router.routes).to.have.property('POST');
    expect(router.routes).to.have.property('PUT');
    expect(router.routes).to.have.property('DELETE');
    expect(router.routes).to.have.property('PATCH');
  });
});

describe('server functionality', () => {
  it('it should respond to an invalid route', () => {
    request('localhost:8888')
    .get('/dfs')
    .end((err, res) => {
      expect(res).to.have.status(404);
      expect(res.text).to.eql('NOT FOUND');
    });
  });

  it('should respond to a valid route', () => {
    request('localhost:8888')
    .get('/')
    .end((err, res) => {
      expect(err).to.eql(null)
      expect(res).to.have.status(200);
    });
  });
});
