module.exports = function insertSort (data) {
  const array = [...data];
  for(let i = 1; i < array.length; i++) {
    let value = array[i];
    for (var j = i; j > 0 && array[j - 1] > value; j--) {
      array[j] = array[j - 1];
    }

    array[j] = value;
  }
  
  return array

};
