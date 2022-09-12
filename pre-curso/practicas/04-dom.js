const myName = 'Pablo';
let myAge = 22;
let x = 3;
let y = 4;
const likesMusic = true;

const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log('nameElement', nameElement);
console.log('ageElement', ageElement);
console.log('likesMusicElement', likesMusicElement);

nameElement.textContent = myName;
ageElement.textContent = myAge;

if (likesMusic == true) {
    likesMusicElement.textContent = 'Me gusta la música';
  } else {
    likesMusicElement.textContent = 'No me gusta la música';
  }
  
  const body = document.querySelector('body');
  const text = document.createElement('p');
  text.textContent = 'Hola mundo desde el DOM!';
  
  body.appendChild(text);
  
  body.removeChild(text);