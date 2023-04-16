//For

//Exercise 1

var team = ["Dibu", "romero", "otamendi", "tagliafico", "Molina"];

for (let i = 0; i < team.length; i++) {
    var teamFor = team[i];
    console.log(teamFor); // Dibu - Romero - otamendi - tagliafico - Molina
}

//Exercise 2

for (let i = 0; i < team.length; i++) {
    var teamFor = team[i].substring(0,1).toUpperCase() + team[i].substring(1,team[i].length);
    if (teamFor != team[i]) {
        console.log(teamFor); // Romero - Otamendi - Tagliafico
    }
}

//Exercise 3

var sentence = ""

for (let i = 0; i < team.length; i++) {
    var teamFor = team[i];
    sentence = sentence + teamFor
}

console.log(sentence) // DiburomerootamenditagliaficoMolina

//Exercise 4

var emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray[i] = i
}

console.log(emptyArray) // (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]