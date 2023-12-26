function againP(str) {
  arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ")") {
      if (arr[arr.length - 1] == "(") {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    } else if (str[i] == "}") {
      if (arr[arr.length - 1] == "{") {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    } else if (str[i] == "]") {
      if (arr[arr.length - 1] == "[") {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    } else {
      arr.push(str[i]);
    }

    console.log(arr);
  }
  console.log(arr.length > 0 ? "not balanced" : "balanced");
}
againP("}(()){}");
