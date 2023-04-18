//06-Functions

console.log("Functions")

//Exercise A

function sumaA(val1, val2) {
    return val1 + val2;
}

console.log("Exercise 6-A: " , sumaA(1,4)); // 3

//Exercise B

function sumaB(val1, val2) {
    if (!isNaN(val1) && !isNaN(val2)) {
        resultado = val1 + val2;
        return resultado;
    } else {
        window.alert("One value is incorrect")
        resultado = NaN
        return resultado
    }
}

console.log("Exercise 6-B: " ,sumaB("asd",2)); // "One value is incorrect" - NaN

//Exercise C

function validateInteger(val1) {
    if (Number.isInteger(val1)){
        return true
    }
    else {
        return false
    }
}

console.log("Exercise 6-C: " , validateInteger(5)) // false

//Exercise D

function newSuma(val1, val2) {
    if (!validateInteger(val1)) {
        window.alert("First value is incorrect")
        return parseInt(val1)
    }
    else if (!validateInteger(val2)) {
        window.alert("Second value is incorrect")
        return parseInt(val2)
    } else {
        resultado = val1 + val2;
        return resultado;
    }
}

console.log("Exercise 6-D: " , newSuma(4, 0.5))

//Exercise E

function completeValidation(val1, val2) {
    if (isNaN(val1) && isNaN(val2)) {
        return false;
    }
    if (!validateInteger(val1)) {
        return parseInt(val1)
    }
    if (!validateInteger(val2)) {
        return parseInt(val2)
    } else {
        return true
    }
}

function definitiveSuma(val1, val2) {
    if (completeValidation(val1, val2) != false) {
        resultado = val1 + val2;
        return resultado;
    } else {
        var resultado = completeValidation(val1,val2)
        window.alert("Incorrect Value")
        return resultado
    }
}

console.log("Exercise 6-E: " , definitiveSuma(5, 1)) // 3
console.log("Exercise 6-E: " , definitiveSuma(0.1, 1)) // 0 - Incorrect value