const faker = require('faker');
const arrayGenerator = function(range){
  const array = [];
  for(let i = 0; i < range; i++) {
    array[i] = faker.random.number(100);
  }
  return array;
}

module.exports = arrayGenerator;
