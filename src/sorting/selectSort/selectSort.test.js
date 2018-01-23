const chai = require('chai');
const expect = chai.expect;
const selectSort = require('./selectSort');
chai.use(require('chai-sorted'));
const arrayGenerator = require('../../helpers/arrayGenerator');

describe('selectSort', () => { // это метод мока для вызова теста
  it('valid sort array ', () => { // начало описания условия
    expect(selectSort(arrayGenerator(10000))).to.be.sorted();
  });
} );
