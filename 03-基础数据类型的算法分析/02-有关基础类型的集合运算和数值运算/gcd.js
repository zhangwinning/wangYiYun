function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    let d = a % b;
    return gcd(b, d);
}

console.log(gcd(24, 36));