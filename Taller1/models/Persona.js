class Persona {
    constructor(titulo, nombre, segundoNombre, apellido1, apellido2, direccion) {
        this.titulo = titulo || '';
        this.nombre = nombre;
        this.segundoNombre = segundoNombre || '';
        this.apellido1 = apellido1;
        this.apellido2 = apellido2 || '';
        this.direccion = direccion;
    }

//Este patrón || '' sirve para asignar un valor por defecto cuando no se pasa uno.

get nombreCompleto (){

    const partes = [
        this.titulo,
        this.nombre,
        this.segundoCompleto,
        this.apellido1,
        this.apellido2
    ].filter(parte => parte && parte.trim() !== '');
    return partes.join(' ').trim();
}

mostrarInfo() {
    return `${this.nombreCompleto} - Direccion: ${this.direccion}`
}
};

module.exports = Persona;
