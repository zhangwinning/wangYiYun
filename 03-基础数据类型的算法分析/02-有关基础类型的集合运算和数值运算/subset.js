let strList = ['A', 'B', 'C', 'D', 'E'];

let len = strList.length;
let value = 0;

function handleAllSubSet(subSet) {
    for (let i = 0; i < len; i++) {
        value |= ( 1 << i);
    }
    while (value >= 0) {
        printSetByBinary(subSet, value);
        value--;
    }
}

function printSetByBinary(subSet, value) {
    let list = [];
    let binary = remedyBinaryString(value, subSet.length)
    for (let i = 0; i < binary.length; i++) {
        if (parseInt(binary[i])) {
            list.push(subSet[i]);
        }
    }
    console.log(list)
}

function remedyBinaryString(value, strLen) {
    let binary = (value).toString(2);
    while (binary.length < strLen) {
        binary = "0" + binary;
    }
    return binary;
}

handleAllSubSet(strList)
