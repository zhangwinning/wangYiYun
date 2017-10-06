## 素数判断
### 题目一是素数判断,给定一个正整数 n,返回 1 到 n 间的素数。

方法一:暴力枚举法

1. 从1到n进行遍历，对处于1到n中的每个数k，判断k是否是素数，如果k是素数，则将k加入到素数集合(素数是只能被1和它本身整除的数)。
2. 判断k是否是素数方法，只要看每一个比k小的数是否整除k。

因此判断k是否是素数的伪代码是

```js
function isPrime(num) {
    for (let k = 2; k < num; k++) {
        if (num % k === 0) return false;
    }
    return true;
}
```
于是我们得到一个可行的算法是:

```js

function getPrime() {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    console.log(primes);
}
```

方法二:
上面的方法可行，但是有很大的改进空间。改进点在于是否是素数的判断，如果一个数不是素数，他能分解成一系列小于小于它的素数的乘积

例如 8 分解成 2*2*2， 26 分解成 2*13。

由此,要判断一个数是否是素数,只要看小于它的素数是否能整除它即可。

```js

let primeList = new Array(2, 3);

function isPrime (num) {
    if (num <= 3) return true;
    for (let i = 0; i < primeList.length; i++) {
        if (num % primeList[i] === 0) return false;
    }
    primeList.push(num);
    return true;
}
```

对于上面的算法我们再次改进，从第二种方法上反其道而行之, 先拿到一个素数,然后把该素数的倍数对应的数都删除




