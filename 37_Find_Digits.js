function findDigits(n) {
    var stringN = ""
    stringN = n.toString()
    var splitedN = stringN.split("")

    var countDivisor = 0
    for (var i = 0; i < splitedN.length; i++) {
        var numberFromString = parseInt(splitedN[i])
        if (numberFromString !== 0 && n % numberFromString == 0) {
            countDivisor = countDivisor + 1
        }
    }

    return countDivisor
}

var n = 1012
console.log(findDigits(n))

/* function findDigits(n) {
    return String(n)
        .split('')
        .reduce((count, digit) => (n % +digit === 0 ? count + 1 : count), 0);
} */