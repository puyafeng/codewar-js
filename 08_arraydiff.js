function arrayDiff(a = [], b = []) {
  return a.filter((ele) => !b.includes(ele));
}

console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([3,4], [3]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([1, 2, 2, 2, 2, 3, 4, 5], [1, 2]));
