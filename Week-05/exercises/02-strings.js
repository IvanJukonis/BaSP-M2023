//Strings

console.log("Strings")

// Exercise A

var text = "RodrigoDePaul";
var textToUppercase = text.toUpperCase();

console.log("Exercise 2-A: " + textToUppercase); // RODRIGRODEPAUL

//Exercise B

var firstText = "MessiLeonel";
var beginFirstText = firstText.substring(0,5);

console.log("Exercise 2-B: " + completedText); // Messi

//Exercise C

var secondText = "GiovaniLocelso";
var endSecondText = secondText.substring(11);

console.log("Exercise 2-C: " + endSecondText); // lso

//Exercise D

var thirdText = "angelDiMaria";
var newThirdText = thirdText.substring(0,1).toUpperCase() + thirdText.substring(1, 12).toLowerCase();

console.log("Exercise 2-D: " + newThirdText); // Angeldimaria

//Exercise E

var fourthText = "Julian Alvarez";
var spaceFourthText = fourthText.indexOf(" ");

console.log("Exercise 2-E: " + spaceFourthText); // 6

//Exercise F

var fifthText = "lEaNdro pareDeS";
var firstLetter = fifthText.substring(0,1).toUpperCase();
var secondLetter = fifthText.substring((fifthText.indexOf(" ") + 1) , (fifthText.indexOf(" ") + 1) + 1).toUpperCase();
var firstWord = fifthText.substring(1, fifthText.indexOf(" ")).toLowerCase();
var secondWord = fifthText.substring(fifthText.indexOf(" ") + 2).toLowerCase();

var completedText = firstLetter + firstWord + " " + secondLetter + secondWord;

console.log("Exercise 2-F: " + completedText); // Leandro Paredes






