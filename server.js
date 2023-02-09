const binarySearch = function (sortedArray, target) {
  console.log('Given [' + sortedArray + '] and looking for ' + target + ',')

  let searchStart = 0
  let searchEnd = sortedArray.length - 1
  let searchMiddle

  while (searchStart !== searchEnd) {
    searchMiddle = Math.floor((searchStart + searchEnd) / 2)
    console.log('Does ' + sortedArray[searchMiddle] + ' === ' + target + '?')
    if (target === sortedArray[searchMiddle]) {
      console.log('Yes.\n')
      return searchMiddle
    } else if (target > sortedArray[searchMiddle]) {
      searchStart = searchMiddle + 1
      console.log('No, so search [' + sortedArray.slice(searchStart, searchEnd + 1) + "]")
    } else {
      searchEnd = searchMiddle - 1
      console.log('No, so search [' + sortedArray.slice(searchStart, searchEnd + 1) + "]")
    }
  }
  if (sortedArray[searchStart] === target) {
    console.log("Does " + sortedArray[searchStart] + " === " + target + "?")
    console.log('Yes.\n')
    return searchStart
  } else {
    console.log('Not found.\n')
    return -1
  }
}

binarySearch([1, 2, 3, 4, 5], 1)

binarySearch([1, 2, 6, 8], 8)

binarySearch([1, 2, 13, 26, 37], 46)

binarySearch([1, 2, 26, 37], -5)
