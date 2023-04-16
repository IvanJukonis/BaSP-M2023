//Arrays

// Exercise 1

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[4], months[10]); // Mayo Noviembre

// Exercise 2

var sortedMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

sortedMonths.sort();

console.log(sortedMonths); // ["Abril" , "Agosto", "Diciembre" ...]

//Exercise 3

var moreMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

moreMonths.push("PostDiciembre");
moreMonths.unshift("PreEnero");

console.log(moreMonths); // ["PreEnero" , "Enero", "Febrero" ... "Diciembre", "PostDiciembre"]

//Exercise 4

var lessMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

lessMonths.shift();
lessMonths.pop();

console.log(lessMonths); // ["Febrero", "Marzo" ... "Octubre", "Noviembre"]

//Exercise 5

var reverseMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

reverseMonths.reverse();

console.log(reverseMonths); // ['Diciembre', 'Noviembre', 'Octubre' ... 'Marzo', 'Febrero', 'Enero']

//Exercise 6

var unitedMonths = months.join("-"); // Enero-Febrero-Marzo...Octubre-Noviembre-Diciembre

console.log(unitedMonths);

//Exercise 7

var sliceMonths = months.slice(4, 11);

console.log(sliceMonths); // ['Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre']

console.log("Arrays exercises end");

