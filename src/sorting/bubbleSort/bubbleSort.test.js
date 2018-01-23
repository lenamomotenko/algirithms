const chai = require('chai'); // набор условий (асертов)
const expect = chai.expect; // подмодуль
const bubbleSort = require('./bubbleSort');
chai.use(require('chai-sorted')); // утилита для проверки сортировки
const arrayGenerator = require('../../helpers/arrayGenerator');



describe('bubbleSort', () => { // это метод мока для вызова теста
  it('valid sort array ', () => { // начало описания условия
    expect(bubbleSort(arrayGenerator(10000))).to.be.sorted();
  });

  it('valid sort array qsort', () => { // начало описания условия
    expect(arrayGenerator(10000).sort(function(a, b) {
      return a - b
    })).to.be.sorted();
  });
} );
