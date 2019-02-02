import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { should } = chai;
should();

describe('API ENDPOINTS', () => {
  describe('POST', () => {
    it('should return success ', (done) => {
    chai
        .request(app)
        .post('/api/v1/offices')
        .send({
          name: 'apc',
          type:'president' 
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
        });
      done();
    });
  })


})