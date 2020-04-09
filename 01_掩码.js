/**
 * 执行10000000次，0.8秒左右
 * @param {*} str 
 */
function maskfy11(str=""){
    let length = str.length;
    return "#".repeat(length-4>0?length-4:0).concat(str.slice(-4));
}

function maskfy12(str=""){
    let length = str.length;
    return "#".repeat(Math.max(0,length-4)).concat(str.slice(-4));
}

function maskfy13(str=""){
    return "#".repeat(str.slice(0,-4).length).concat(str.slice(-4));
}

/**
 * 执行10000000次，7秒左右
 * @param {*} str 
 */
function maskfy21(str=""){
    return str.slice(0,-4).replace(/./g,"#").concat(str.slice(-4));
}

/**
 * 执行10000000次，7秒左右
 * @param {*} cc 
 */
function maskfy22(cc) {
    return cc.replace(/.(?=....)/g, '#');
}

/**
 * 执行10000000次，7秒左右
 * @param {*} cc 
 */
function maskfy23(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}


function timetest(f){
    let start = Date.now();
    for(let i =0;i<10000000;i++){
        f();
    }
    let end = Date.now();
    console.log(end-start);
}

console.log(maskfy11("1234567890"));
console.log(maskfy12("1234567890"));
console.log(maskfy13("1234567890"));
console.log(maskfy21("1234567890"));
console.log(maskfy22("1234567890"));
console.log(maskfy23("1234567890"));
timetest(function(){
    return maskfy11("1234567890");
});

