// Animal 
const Animal = require('./models/Animal')
let miPerro = new Animal("Pepito");
console.log(miPerro.nombre);



//Perro
const Perro = require('./models/Perro');
let perro2 = new Perro("pepita");
console.log(perro2.nombre);

miPerro.hablar();
perro2.hablar();
