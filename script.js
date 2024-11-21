function printPrimes(n, m) {
    const primes = [];
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    console.log(primes.join(" "));
}
function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
	
// Example Usage:
printPrimes(5, 10); // Output: 7
printPrimes(7, 20); // Output: 11 13 17 19