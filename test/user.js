//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const User = require('../models/User');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Users', function () {
  /*
   * Test the /GET route
   */
  describe('/GET users', function () {
    it('it should GET all the users', function () {
      chai.request(app)
        .get('/users')
        .then(function (res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
        })
        .catch(function (err) {
          throw err;
        });
    });
  });

});