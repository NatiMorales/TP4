class Contacto {
    #nombre;
    #telefono;

    constructor(nombre, telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre !== " "){
            this.#nombre = nuevoNombre;
        } else {
            alert("Nombre Inválido");
        }
    }
    get telefono(){
        return this.#telefono;
    }
    set telefono(nuevoTelefono){
        if(nuevoTelefono !== " "){
            this.#nombre = nuevoTelefono;
        }
    }
}

class Agenda{
    #contactos;
    #tamanio;
    constructor(tamanio){
        this.contactos = [];
        this.#tamanio = tamanio;
    }
    get contactos(){
        return this.#contactos;
    }
    get tamanio(){
        return this.#tamanio;
    }
    set tamanio(nuevoTamanio){
        this.#tamanio = nuevoTamanio;
    }
    aniadirContacto(contacto){
        this.contactos.push(contacto);
    }
}

const agenda = new Agenda(1)
console.log(agenda);
let contador = 0;
// while(contador < agenda.tamanio){
//     const opcion = prompt(`Seleccione una opción: 
//                             1- añadir contacto, 
//                             2- consultar existencia, 
//                             3- listar contactos, 
//                             4- buscar contacto, 
//                             5- eliminar contacto, 
//                             6- agenda llena, 
//                             7- huecos libres`);
    switch(opcion){
        case 1:
            const nombre = prompt("Ingrese un nombre");
            const telefono = prompt("Ingrese un telefono");
            const contacto = new Contacto(nombre,telefono);
            agenda.aniadirContacto(contacto);
            console.log(agenda.contactos)
            break;
    }
//     contador++;
// }
