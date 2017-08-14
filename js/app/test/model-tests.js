require('amd-loader');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
const SERVER = 'http://localhost:3000';
chai.use(chaiHttp);

define(['../model'], (Model) => {
    describe('Model', () => {
        let model;
        beforeEach(() => {
            model = new Model('revenue', '#59d026', '#056700');
        });
        describe('Constructor()', () => {
            it('should initialize a new model', () => {
                expect(model.type).to.equal('revenue');
            });
        });
        describe('/GET device values', () => {
            it('it should GET the device values', (done) => {
                chai.request(SERVER)
                    .get(`/${model.type}`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.tablet).to.be.an('Number');
                        done();
                    });
            });
        });
    });
});

