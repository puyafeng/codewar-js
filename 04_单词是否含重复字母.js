function isIsogram(str="") {
  // return !/(.).*(\1)/gi.test(str);
  return !/(\w)\w*(\1)/gi.test(str);
  // return !str.match(/(.).*(\1)/gi);
}

// function isIsogram(str=""){
//   return str.split("");
// }
console.log(isIsogram("abc"));
console.log(isIsogram("abcefghij"));
console.log(isIsogram("abA"));
console.log(isIsogram("aa"));
console.log(isIsogram("aba"));
console.log(isIsogram("abcdefabc"));
console.log(isIsogram("dcbaabc"));
console.log(isIsogram(""));
