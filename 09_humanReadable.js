// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable(seconds) {
    // HH:MM:SS
    let s = seconds%60;
    let m = seconds - s;
    
    return m%(3600);
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(86399));
console.log(humanReadable(359999))