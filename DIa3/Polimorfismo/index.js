// Animal 
const Animal = require('./models/Animal')
let miPerro = new Animal("Pepito");
console.log(miPerro.nombre);



//Perro
const Perro = require('./models/Perro');
let perro2 = new Perro("pepita");
console.log(perro2.nombre);

const PerroRobot = require('./models/PerroRobot')
let dante = new PerroRobot("perrote");
console.log(dante.nombre);

miPerro.hablar();
miPerro.saludar();
perro2.hablar();
perro2.saludar();
dante.hablar();
dante.saludar();


