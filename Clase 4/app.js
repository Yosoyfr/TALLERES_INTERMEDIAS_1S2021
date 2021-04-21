/*
Este es un comentario multilinea
Linea 2
Linea 3
*/

// Comentario de una linea

// Hola soy un comentario

//Impresion por consola
//console.log("Hello World");

/**
 * Variables
 */

// Numero
var a = 5;
var b = 10.5;
var c = -5;
//console.log(a, b, c);
//console.log(a * c);

// Cadenas de texto (STRINGS)
var text = "Hello World desde var text";
var char = "y char";
//console.log(text + " " + char);

// Arreglos (Arrays)
var list = [1, 2, 3, 4];
// Posicion[0, 1, 2, 3]
var names = ["Francisco", "Jose", "Jorge", "Luis"];
//console.log(names);

// JavaScript Object Notation (JSON)
var student = {
  name: "Francisco Suarez",
  age: 21,
  carnet: 201807190,
  direction: "Escuintla",
};

var obj = { valor: 1, value: 2 };
//console.log(student.age);
//console.log(student);

var students = [
  { name: "Francisco Suarez", age: 21, carnet: 201807190 },
  { name: "Jorge Cante", age: 21, carnet: 201800499 },
  { name: "Jose Moran", age: 21, carnet: 201807455, color: "green" },
  //{ marca: "Toyota", modelo: "yaris", year: 2020 },
];

//console.log(students);
//console.log(students[1]);

/**
 * CONDICIONALES
 */

// IF
/*
console.log("IF - ELSE IF - ELSE");
var x = 20;
if (x > 10) {
  console.log("El numero es mayor a 10");
} else if (x < 10) {
  console.log("El numero es menor a 10");
} else {
  console.log("El numero es igual a 10");
}
*/

//SWITCH
/*
console.log("SWITCH");
var y = 20;
switch (y) {
  case 0:
    console.log("El numero es igual a 0");
    break;
  case 5:
    console.log("El numero es igual a 5");
    break;
  case 10:
    console.log("El numero es igual a 10");
    break;
  default:
    console.log("Default: El numero es:", y);
    break;
}
*/

/**
 * Ciclos
 */

// FOR
/*
console.log("FOR");
for (let i = 0; i < 5; i++) {
  let element = i;
  //Impresion de datos
  console.log(element);
}
*/

/*
console.log("FOR para recorrer un array");
for (let i = 0; i < students.length; i++) {
  let element = students[i];
  //Impresion de datos
  console.log(element.name);
}
*/

// WHILE
/*
console.log("WHILE");
var z = 0;
while (z < 5) {
  console.log(z);
  z++;
}
*/

/*
console.log("WHILE para recorrer un array");
var count = 0;
while (count < students.length) {
  let element = students[count];
  console.log(element.carnet);
  count++;
}
*/

// FOREACH
/*
console.log("FOREACH");
students.forEach((element) => {
  console.log(element);
});
*/

/**
 * FUNCIONES
 */

function suma(a, b) {
  let result = a + b;
  return result;
}

function resta(a, b) {
  let result = a - b;
  return result;
}

function operation(a, b, symbol) {
  let result = 0;
  switch (symbol) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = 0;
      break;
  }
  return result;
}

var sum = suma(5, 15);
var res = resta(10, 5);
var op = suma(5, 15) * resta(10, 8);

var calculator = operation(5, 10, "=");

function areaCirculo(radio) {
  const pi = 3.1416;
  const result = pi * radio ** 2;
  return result;
}

function greetMe(yourName) {
  alert("Hola " + yourName);
}

var area = areaCirculo(3);

//console.log(area);

greetMe("Allan");
