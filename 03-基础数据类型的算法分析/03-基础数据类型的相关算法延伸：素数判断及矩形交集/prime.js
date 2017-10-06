function prime(n) {
    this.n = n;
}

let primeList = new Array(2, 3);

prime.prototype.isPrime_1 = function (num) {
    for (let k = 2; k < num; k++) {
        if (num % k === 0) return false;
    }
    return true;
}
prime.prototype.getPrime_1 = function () {
    let n = this.n;
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (prime.prototype.isPrime_1(i)) primes.push(i);
    }
    process.stdout.write(primes + " ");
}


prime.prototype.isPrime_2 = function (num) {
    if (num <= 3) return true;
    for (let i = 0; i < primeList.length; i++) {
        if (num % primeList[i] === 0) return false;
    }
    primeList.push(num);
    return true;
}

prime.prototype.getPrime_2 = function () {
    let n = this.n;
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (prime.prototype.isPrime_2(i)) primes.push(i);
    }
    process.stdout.write('\n' + primes + " ");
}

prime.prototype.getPrime_3 = function () {
    let n = this.n;
    let primes = new Array(n + 1);
    for (let i = 0; i < primes.length; i++) {
        primes[i] = true;
    }
    for (let i = 2; i <= n; i++) {
        if (primes[i] == true) {
            let p = i;
            for (let j = 2; j * p <= n; j++) {
                primes[j * p] = false;
            }
        }
    }
    console.log('');
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            process.stdout.write(i + ' ');
        }
    }
}

let p = new prime(100);
p.getPrime_1();
p.getPrime_2();
p.getPrime_3();