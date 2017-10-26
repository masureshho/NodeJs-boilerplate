/* eslint-disable no-unused-expressions */
import { default as request } from 'supertest';
import * as server from '../../../index';
import chai from 'chai';
const expect = chai.expect;
import userModel from '../../../models/User';

// Sample data to add user
const userName = 'suresh';
const email =  'suresh@gmail.com';

describe('User', () => {
  let userId = null;
  after((done) => {
    userModel.remove({}, (error) => {
      if (error) return done(error);
      return done();
    });
  });
  beforeEach((done) => {
    userModel.create({ userName, email }, (error, user) => {
      if (error) return done(error);
      userId = user._id;
      return done();
    });
  });
  it('should save user into system', (done) => {
    request(server.default.express.app)
    .post('/api/user')
    .send({ userName, email })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((error, { body: res }) => {
      expect(error).to.not.exist;
      expect(res).to.be.an('object');
      expect(res).to.have.property('id');
      done();
    });
  });
  it('should return user by id', (done) => {
    request(server.default.express.app)
    .get(`/api/user/${userId}`)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((error, { body: res }) => {
      expect(error).to.not.exist;
      expect(String(res._id)).to.equal(String(userId));
      expect(res).to.include.keys('userName', 'email');
      done();
    });
  });
});