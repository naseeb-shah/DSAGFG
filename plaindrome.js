function checkPalindrome(N, str) {
  //write code here

  let str2 = str.split("");
  str2 = str2.reverse().join("");

  console.log(str2 == str);
}

checkPalindrome(2, "Palindrome string");
