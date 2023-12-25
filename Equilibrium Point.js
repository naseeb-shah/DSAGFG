let arr = [1, 3, 5, 2, 2];

function equilibrium(arr, n) {
  if (arr.length == 1) {
    return 0;
  }

  let rightSum = arr.reduce((ac, cu) => ac + cu, 0);

  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    if (leftSum == rightSum) {
      return i + 1;
    }
    rightSum -= arr[i];
  }
  return -1;
}
console.log(equilibrium(arr, arr.length));
