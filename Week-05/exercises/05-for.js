//For

console.log("For")

//Exercise A

var team = ["Dibu", "romero", "otamendi", "tagliafico", "Molina"];

for (let i = 0; i < team.length; i++) {
    var teamFor = team[i];
    window.alert("Exercise 5-A: " + teamFor); // Dibu - Romero - otamendi - tagliafico - Molina
}

//Exercise B

for (let i = 0; i < team.length; i++) {
    var teamFor = team[i].substring(0,1).toUpperCase() + team[i].substring(1,team[i].length);
    if (teamFor != team[i]) {
        window.alert("Exercise 5-B: " + teamFor); // Romero - Otamendi - Tagliafico
    }
}

//Exercise C

var sentence = ""

for (let i = 0; i < team.length; i++) {
    var teamFor = team[i];
    sentence = sentence + teamFor
}

console.log("Exercise 5-C: " + sentence) // DiburomerootamenditagliaficoMolina

//Exercise D

var emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray[i] = i
}

console.log("Exercise 5-D: " , emptyArray) // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]