class Animal{
    //Atributos
    //nombre
    #nombre;
    constructor(nombre){
        this.#nombre=nombre;
    }

    //Métodos -> Funcionalidades
    hablar(){
        console.log(`Soy un animal llamado ${this.nombre} que habla!`);
    };
    saludar(){
        console.log('Hola Buenos dias Humanos, los animales dominaremos');
    }
}

module.exports = Animal;