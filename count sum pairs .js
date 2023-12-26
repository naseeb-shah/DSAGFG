let sum = 9;
let A = [1, 2, 4, 5, 7];
let B = [5, 6, 3, 4, 8];
console.log(findPairs(A, B, sum));
function findPairs(A, B, X) {
  let ans = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] + B[j] == X) {
        ans.push([A[i], B[j]]);
      }
    }
  }
  return ans;
}
