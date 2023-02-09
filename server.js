const binarySearch = function (sortedArray, target) {
  let searchStart = 0;
  let searchEnd = sortedArray.length - 1;
  let searchMiddle;

  while (searchStart != searchEnd) {
    searchMiddle = Math.floor((searchStart + searchEnd) / 2);
    if (target == sortedArray[searchMiddle]) {
      return searchMiddle;
    } else if (target > sortedArray[searchMiddle]) {
      searchStart = searchMiddle + 1;
    } else {
      searchEnd = searchMiddle - 1;
    }
  }
  if (sortedArray[searchStart] == target) {
    return searchStart;
  } else {
    return -1;
  }
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
