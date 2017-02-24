'use strict';

const express = require('express');
const chai = require('chai');
const action = require('./action').action;
const request = require('supertest');

const expect = chai.expect;

describe('simple test scenarios', () => {
    const app = express();
    const router = express.Router();

    const initExpress = () => {
        router.get('/me', action);
        app.use('/api', router);
    };

    before(() => initExpress());

   it('expect to get some json back', (done) => {
       request(app)
           .get('/api/me')
           .send()
           .expect(200)
           .end((err, res) => {
               if (err) {
                   return done(err);
               }
               expect(res.body).to.have.property('param1');
               return done();
           });
   }) ;
});