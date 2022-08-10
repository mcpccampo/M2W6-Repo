function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false; // set to false before iterating
    for (let i = 0; i < arr.length; i++) {
      // check if value is greater than next
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        // swap vals
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // Do not move this console.log
        console.log('arr', arr.join(','));
      }
    }
  }
  return arr;
  // Iterate through the array
  // arr.sort((a, b) => {
  //   if (a < b) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // });
}

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
bubbleSort(arr);

module.exports = bubbleSort;
