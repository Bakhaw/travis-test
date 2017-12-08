const chai = require('chai');

const expect = chai.expect;

const hello = require('../hello.js');

describe('Hello world', () => {
  it('renvoie hello world', () => {
    expect(hello()).to.equal('hello world');
  });
});
