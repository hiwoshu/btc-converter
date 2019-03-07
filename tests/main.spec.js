const expect = require('chai').expect;

const exec = require('child_process').exec;
const btcConverter = 'node.exe ./src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {
  it('should return description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined.')).to.be.true;
      done();
    });
  });
});
