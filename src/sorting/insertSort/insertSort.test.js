const chai = require('chai');
const expect = chai.expect;
const insertSort = require('./insertSort');
const arrayGenerator = require('../../helpers/arrayGenerator');
chai.use(require('chai-sorted'));

describe('insertSort', () => {
  it('valid sort array', () => {
    expect(insertSort(arrayGenerator(10000))).to.be.sorted();
  });
});
