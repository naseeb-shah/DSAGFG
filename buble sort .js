function bubbleSort(arr) {
  let n = arr.length;
  let totalSwaps = 0;

  for (let i = 0; i < n; i++) {
    // Track number of swaps for each pass
    let swaps = 0;

    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swaps++;
      }
    }

    totalSwaps += swaps;

    // If no swaps were made in the last pass, the array is already sorted
    if (swaps === 0) {
      break;
    }
  }

  console.log(`Array is sorted in ${totalSwaps} swaps.`);
  console.log(`First Element: ${arr[0]}`);
  console.log(`Last Element: ${arr[n - 1]}`);
}

// Example usage with the provided array [5, 49, 35, 162, 160, 67, 6, 106]
const arrayToSort = [5, 49, 35, 162, 160, 67, 6, 106];
bubbleSort(arrayToSort);
