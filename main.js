function add(a, b) {
    return (a + b)
}
let sum = add(9, 7)
console.log(sum)

function multiply(a, b) {
    let product = 0
    for (let i = 0; i < b; i++) {
        product = add(a, product)
    }
    return product
}
let product = multiply(9, 7)
console.log(product)


function power(x, n) {
    let exponent = 1
    for (let i = 0; i < n; i++) {
        exponent = multiply(x, exponent)
    }
    return exponent
}
let exponent = power(2, 8)
console.log(exponent)


function factorial(n) {
    let result = 1
    for (let i = 0; i < n; n--) {
        result = multiply(n, result)
    }
    return result
}
let result = factorial(7)
console.log(result)


function fibonacci(n) {
    let arrayposition = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arrayposition.push(add(arrayposition[i - 2], arrayposition[i - 1]));
    }
    return arrayposition[n -1]
}
let arrayposition = fibonacci(8)
console.log(arrayposition)