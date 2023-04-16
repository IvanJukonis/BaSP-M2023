//If-Else

// Exercise 1

var randomNumber = Math.random()

if (randomNumber >= 0.5) {
    console.log(randomNumber + "is bigger than 0.5")
} else {
    console.log(randomNumber + "is lower than 0.5")
}

// Exercise 2

var age = 23;

if (age <= 2) {
    console.log("Bebe");
}
else if (age <= 12) {
    console.log("Niño");
}
else if (age <= 19) {
    console.log("Adolescente");
}
else if (age <= 30) {
    console.log("Joven"); // <---
}
else if (age <= 60) {
    console.log("Adulto");
}
else if (age <= 75){
console.log("Adulto Mayor");
}
else {
    console.log("Abuelo");
}
