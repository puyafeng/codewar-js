function DNAStrand(dna="") {
  //your code here
  return dna.split("").map(ele=>"ATCG".charAt("TAGC".indexOf(ele))).join("");
}
{k=1,k2=2}[0]
function DNAStrand(dna="") {
    //your code here
    return dna.replace(/./g,ele=>{
        return {"A":"T","C":"G","T":"A","G":"C"}[ele];
    });
  }

 console.log(DNAStrand("ATTGC")); // return "TAACG"

console.log(DNAStrand("GTAT")); // return "CATA"

