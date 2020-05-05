function alphabetPosition(text) {
    // text.replace(/[a-z]/g,);
    // return text.replace(/[^a-z]/g);
    ""
  return text.toLowerCase().replace(/[^a-z]/g,"").split("").map(ele=>ele.charCodeAt()-96).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

