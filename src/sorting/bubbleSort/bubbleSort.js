module.exports = function bubbleSort (data) {
  const array = [...data]; // spread operator
  const length = array.length;
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length - i - 1 ; j++) {
      if(array[j] > array[j+1]) {
        let c = array[j] ;
        array[j] = array[j+1];
        array[j+1] = c;
      }
    }
  }

  return array
}
