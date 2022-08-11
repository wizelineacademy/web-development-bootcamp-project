console.log('Hola mundo!');
const myName = 'Pablo';
let myAge = 22;
let x = 3;
let y = 4;
const likesMusic = true;
console.log('myName', myName);
console.log('myAge', myAge);
console.log('x', x);
console.log('y', y);
console.log('likesMusic', likesMusic);

// myName='Juan';

console.log('myName', typeof myName);
console.log('myAge', typeof myAge);
console.log('x', typeof x);
console.log('y', typeof y);
console.log('likesMusic', typeof likesMusic);

let z = y * x;
console.log(z);

z = y / x;
console.log(z);

z = y + x;
console.log(z);

z = y - x;
console.log(z);

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);

if (likesMusic == true) {
  console.log('Me gusta la música');
} else {
  console.log('No me gusta la música');
}

// let compraRealizada = false;
// let pisoBarrido = true;
// let dinero;
// if(compraRealizada==true){
//     dinero = 10;
// }
// else if(pisoBarrido==true){
//     dinero = 10;
// }
// else{
//     dinero = 5;
// }

let compraRealizada = false;
let pisoBarrido = true;
let dinero;
if (compraRealizada == true || pisoBarrido == true) {
  dinero = 10;
} else {
  dinero = 5;
}

console.log('El dinero de tu hermanito es:', dinero);

let compraRealizada2 = false;
let pisoBarrido2 = true;
let dinero2;
if (compraRealizada2 == true || pisoBarrido2 == true) {
  dinero2 = 20;
} else {
  dinero2 = 0;
}

console.log('El dinero de tu hermanito es:', dinero2);

// YOB = Year of Birth
let YOB = 1999;
const d = new Date();
// CY = Current Year
let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (year - YOB == 1) {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + (year - YOB) + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' años');
  }
}

for (let num = 0; num <= 35; num++) {
  console.log('No debo de comerme el lonche de mis compañeros');
}

let year = YOB;
while (year <= CY) {
  let age = year - YOB;
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (age == 1) {
    console.log('En ' + year + ' yo tenía ' + age + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tendré ' + age + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + age + ' años');
  }
  year++;
}

// function aCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }

const aCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(aCelsius(100));

const tocarNota = ()=> {
  // Obtenemos la nota
  // Reseteamos la ejecución de la nota
  // Utilizamos el método play de la nota
  // Añadimos la clase active
  // Agregamos un event listener al evento ended
    // Cuando termine de reproducirse el sonido, removemos la clase active
}

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
