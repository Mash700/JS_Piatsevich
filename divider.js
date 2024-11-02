let n=prompt("n=");
let k=prompt("k=");
n = parseFloat(n);
k = parseFloat(k);
let whole=n/k;
let integerPart = Math.floor(whole);
let fractionalPart = whole - integerPart;
if  (0 < whole  && whole < 1) {
    console.log("Only fractionalPart " +  fractionalPart);
}
else if (-1 < whole && whole < 0){
    console.log("Only fractionalPart " +  fractionalPart);
}
else {
    console.log("WholePart remainder " + whole  + " " + fractionalPart);
}