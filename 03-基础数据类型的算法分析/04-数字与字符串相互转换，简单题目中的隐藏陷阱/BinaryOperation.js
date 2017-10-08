function binaryOperation() {

}

/**
 * 把不同数值转化为10进制
 */
binaryOperation.prototype.strToInt = function (s, b) {
    let value = 0;
    for(let i = 0; i < s.length - 1; i++) {
        console.log('#####', parseInt(s[i]),  Math.pow(b, i), parseInt(s[i]) * Math.pow(b, s.length - i))
        value = value +  parseInt(s[i]) * Math.pow(b, s.length - i);
    }
    console.log(value)
}

let operate = new binaryOperation();

operate.strToInt("10100", 2);