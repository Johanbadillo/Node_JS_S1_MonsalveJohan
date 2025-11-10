const Animal = require("./Animal");

class Perro extends Animal{
    hablar(){
        console.log(`Soy un perro llamado ${this.nombre} que habla!`);
    };
    saludar(){
        console.log('Hola Buenos dias Humanos, los perros dominaran los humanos y los gatos');
    }
}
module.exports = Perro