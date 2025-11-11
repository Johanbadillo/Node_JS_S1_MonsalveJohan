const Persona = require('./Persona');

class Paciente extends Persona {
    constructor(titulo,nombre, segundoNombre, apellido1, apellido2, direccion, fechaNacimiento, diagnostico){
        super(titulo, nombre, segundoNombre, apellido1, apellido2, direccion);
        this.fechaNacimiento = new Date(this.fechaNacimiento);
        this.diagnostico = diagnostico;
        this.pabellon = null;
    }

    calcularEdad( fechaNacimiento = new Date()){
        let edad = fechaReferencia.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = fechaReferencia.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes  === 0 && fechaReferencia.getDate() < this. fechaNacimiento.getDate())){
            edad--;
        }
        return edad;
    }
}

const angel = new Persona("Ángel", new Date(2001, 10, 21)); // noviembre = mes 10 (porque enero=0)
console.log(angel.calcularEdad());