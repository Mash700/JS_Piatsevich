let n = prompt("Enter n:");
if (n > 0 && n < 10000000) {
    let length = String(n).length;
    function sumOfDigits(n) {
        let sum = 0;
        let rest = n, remainder;

        while (rest) {
            remainder = rest % 10;
            sum += remainder;
            rest = Math.floor(rest / 10); 
        }

        return sum;
    }

    let result = sumOfDigits(Number(n));
    console.log("Sum of digits:", result);

} else {
    console.log("Please enter a number between 1 and 9999999.");
}