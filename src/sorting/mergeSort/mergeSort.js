module.exports = function mergeSort(data) {
  var array = [...data];

  function merge (left, rigth) {
    const temp = [];

    let iLeft = 0; // index
    let iRigth = 0;

    while(iLeft < left.length && iRigth < rigth.length) {

      if (left[iLeft] < rigth[iRigth]) {
        temp.push(left[iLeft++]);
      } else {
        temp.push(rigth[iRigth++]);
      }
    }

    return temp.concat(left.slice(iLeft)).concat(rigth.slice(iRigth));
  }

  function sort (array) {

    if (array.length < 2) { // break if length < 2
     return array;
    }

    let middle = Math.floor(array.length/2);

    let left = array.slice(0, middle); // slice -- cut part of array
    let rigth = array.slice(middle);

    return merge(sort(left), sort(rigth)); //recursia
  }

  return sort(array);
};
