var f1 = function (a, b) {
    return a * b
}

var f2 = function (a, b, c) {
    var sum = a + b;
    return (sum - c)
}

function f3 (x, y) {
    var arg1 = f1 (( x),(y))
    var arg2 = f2 ((x),(y),(arg1))
    return arg1 + ' si ' + arg2
}
console.log('Rezultatul este ' + f3(7, 1))
console.log('Rezultatul este ' + f3(14, 6))
console.log('Rezultatul este ' + f3(2, 8))