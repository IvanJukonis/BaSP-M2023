//If-Else

console.log("If Else");

// Exercise A

var randomNumber = Math.random();

if (randomNumber >= 0.5) {
    window.alert("Exercise 4-A: " + randomNumber + " is bigger than 0.5");
} else {
    window.alert("Exercise 4-A: " + randomNumber + " is lower than 0.5");
}

// Exercise B

var age = 23;

if (age <= 2) {
    window.alert("Exercise 4-A: Bebe");
}
else if (age <= 12) {
    window.alert("Exercise 4-A: Niño");
}
else if (age <= 19) {
    window.alert("Exercise 4-A: Adolescente");
}
else if (age <= 30) {
    window.alert("Exercise 4-A: Joven"); // <---
}
else if (age <= 60) {
    window.alert("Exercise 4-A: Adulto");
}
else if (age <= 75){
    window.alert("Exercise 4-A: Adulto Mayor");
}
else {
    window.alert("Exercise 4-A: Abuelo");
}
