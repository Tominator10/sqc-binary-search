const binarySearch = function (sortedArray, target) {
  let arr = sortedArray;
  while (arr.length !== 0) {
    console.log(arr);
    if (getMiddleValue(arr) == target) {
      // number has been found
      console.log("match");
      return getMiddleIndex(arr);
    } else if (getMiddleValue(arr) < target) {
      // get second half of array
      console.log("second half");
      arr = arr.slice(getMiddleIndex(arr) + 1);
    } else {
      //get first half
      console.log("first half");
      arr = arr.slice(0, getMiddleIndex(arr));
    }
  }
  return -1;
};

const getMiddleIndex = function (array) {
  return Math.floor(array.length / 2);
};

const getMiddleValue = function (array) {
  return array[getMiddleIndex(array)];
};

console.log("Tests:");
console.log();
console.log("searching [1,2,3,4,5] for 5");
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log();
console.log("searching [1, 2, 6, 8] for 8");
console.log(binarySearch([1, 2, 6, 8], 8));
console.log();
console.log("searching [1, 2, 13, 26, 37] for 46");
console.log(binarySearch([1, 2, 13, 26, 37], 46));
