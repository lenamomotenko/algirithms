const chai = require('chai');
const expect = chai.expect;
const mergeSort = require('./mergeSort');
const arrayGenerator = require('../../helpers/arrayGenerator');
chai.use(require('chai-sorted'));

const testArray = [1,2,3,67,34,2];
describe('mergeSort', () => {
  it('valid sort array', () => {
    expect(mergeSort(arrayGenerator(10000))).to.be.sorted();
  })
})
