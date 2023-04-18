//Arrays

console.log("Arrays");

// Exercise A

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Exercise 3-A: " , months[4], months[10]); // Mayo Noviembre

// Exercise B

var sortedMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

sortedMonths.sort();

console.log("Exercise 3-B: " , sortedMonths); // ["Abril" , "Agosto", "Diciembre" ...]

//Exercise C

var moreMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

moreMonths.push("PostDiciembre");
moreMonths.unshift("PreEnero");

console.log("Exercise 3-C: " , moreMonths); // ["PreEnero" , "Enero", "Febrero" ... "Diciembre", "PostDiciembre"]

//Exercise D

var lessMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

lessMonths.shift();
lessMonths.pop();

console.log("Exercise 3-D: " , lessMonths); // ["Febrero", "Marzo" ... "Octubre", "Noviembre"]

//Exercise E

var reverseMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

reverseMonths.reverse();

console.log("Exercise 3-E: " , reverseMonths); // ['Diciembre', 'Noviembre', 'Octubre' ... 'Marzo', 'Febrero', 'Enero']

//Exercise F

var unitedMonths = months.join("-"); // Enero-Febrero-Marzo...Octubre-Noviembre-Diciembre

console.log("Exercise 3-F: " , unitedMonths);

//Exercise G

var sliceMonths = months.slice(4, 11);

console.log("Exercise 3-G: " , sliceMonths); // ['Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre']

