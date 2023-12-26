function qSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...qSort(left), pivot, ...qSort(right)];
}

let arr = [23, 1, 4, 6, 66, 8, 12, 23];
console.log(qSort(arr));
