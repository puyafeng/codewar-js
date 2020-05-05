function isIsogram(str="") {
  return str.match(/(\w)+(?!\1)/gi);
}
console.log(isIsogram("abc"));
console.log(isIsogram("abA"));
console.log(isIsogram("aa"));
console.log(isIsogram(""));
