const persona = {
  nombre: ['Pablo', 'Lozano'],
  edad: 22,
  bio: function () {
    console.log(`${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años.`);
  },
  presentarse: function () {
    console.log(`Hola!, soy ${this.nombre[0]}.`);
  },
};

const calificaciones = [10, 6, 7, 8, 8, 7, 5, 10, 9, 9];
calificaciones[6] = 6;
console.log(calificaciones.length);
let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
  suma = calificaciones[i] + suma;
}
const promedio = suma / calificaciones.length;
console.log(promedio);

const frutas = ['Plátano', 'Fresa', 'Naranja', 'Madarina', 'Sandía'];
frutas[5] = 'Piña';
frutas[0] = 'Higo';
frutas.push('Frambuesa');
frutas.shift();
console.log(frutas);
