let arr = ["geeksforgeeks", "geeks", "gek", "geezer"];
console.log(prefix(arr, arr.length));
function prefix(arr, n) {
  let ans = arr[0];

  function check(str1, str2) {
    let pre = "";
    let length = Math.min(str1.length, str2.length);

    for (let i = 0; i < length; i++) {
      if (str1[i] == str2[i]) {
        pre += str1[i];
      } else {
        return pre;
      }
    }
    return pre;
  }

  for (let i = 1; i < n; i++) {
    ans = check(ans, arr[i]);

    if (ans.length == 0) {
      return -1;
    }
  }
  return ans;
}
