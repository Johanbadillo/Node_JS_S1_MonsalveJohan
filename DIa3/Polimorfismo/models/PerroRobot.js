const Perro = require("./Perro");

class PerroRobot extends Perro{
    saludar(){
        console.log('Hola Buenos dias Humanos, los robot perros vamos a dominar los cielos');
    }
}
module.exports = PerroRobot