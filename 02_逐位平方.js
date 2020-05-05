function squareDigits(num = 1) {
  return Number.parseInt(
    num
      .toString()
      .split("")
      .map((ele) => {
        return Math.pow(Number.parseInt(ele), 2);
      })
      .join("")
  );
}

function squareDigits(num = 0){
    return Number(num.toString().split("").map(ele=>Number.parseInt(ele)).map(ele=>ele*ele).join(""));
}

function squareDigits(num = 0){
    return +num.toString().split("").map(ele=>ele*ele).join("");
}

console.log(squareDigits(1234));


