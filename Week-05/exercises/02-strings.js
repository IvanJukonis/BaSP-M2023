//Strings

// Exercise 1

var text = "RodrigoDePaul";
var textToUppercase = text.toUpperCase();

console.log(textToUppercase) // RODRIGRODEPAUL

//Exercise 2

var firstText = "MessiLeonel";
var beginFirstText = firstText.substring(0,5);

console.log(completedText); // Messi

//Exercise 3

var secondText = "GiovaniLocelso";
var endSecondText = secondText.substring(11);

console.log(endSecondText); // lso

//Exercise 4

var thirdText = "angelDiMaria";
var newThirdText = thirdText.substring(0,1).toUpperCase() + thirdText.substring(1, 12).toLowerCase();

console.log(newThirdText); // Angeldimaria

//Exercise 5

var fourthText = "Julian Alvarez";
var spaceFourthText = fourthText.indexOf(" ");

console.log(spaceFourthText); // 6

//Exercise 6

var fifthText = "lEaNdro pareDeS";
var firstLetter = fifthText.substring(0,1).toUpperCase();
var secondLetter = fifthText.substring((fifthText.indexOf(" ") + 1) , (fifthText.indexOf(" ") + 1) + 1).toUpperCase();
var firstWord = fifthText.substring(1, fifthText.indexOf(" ")).toLowerCase();
var secondWord = fifthText.substring(fifthText.indexOf(" ") + 2).toLowerCase();

var completedText = firstLetter + firstWord + " " + secondLetter + secondWord;

console.log(completedText); // Leandro Paredes

console.log("Strings exercises end")






