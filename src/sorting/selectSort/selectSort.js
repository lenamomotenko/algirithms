module.exports = function selectSort(data) {

  const array = [...data];
  const length = array.length;

  for(let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
