function copySymbols(str, num) {
    if (num > str.length) {
        num = str.length;
    }
    
    const frontSymbols = str.slice(0, num);
    const backSymbols = str.slice(-num);
    return frontSymbols + str + backSymbols;
}

const originalString = "how are you?";
const result = copySymbols(originalString, 3);
console.log(result); 