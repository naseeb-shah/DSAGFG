//  Output: 17 5 2
A = [16, 17, 4, 3, 5, 2];

function findLeadElements(a, n) {
  let leaders = [];
  for (let i = 0; i < n; i++) {
    let leader = true;
    for (let j = i + 1; j < n; j++) {
      if (a[i] < a[j]) {
        leader = false;
        break;
      }
    }
    if (leader) leaders.push(a[i]);
  }
  return leaders;
}
function leaders(arr, n) {
  let max = arr[n - 1];
  let leaders = [];
  leaders.unshift(max);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      leaders.unshift(arr[i]);
      max = arr[i];
    }
  }
  return leaders;
  // code here
}
console.log(findLeadElements(A, 6));
console.log(leaders(A, 6));
