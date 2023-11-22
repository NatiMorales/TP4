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
    #tamanio;
    constructor(tamanio){
        this.contactos = [];
        this.#tamanio = tamanio;
    }
    get tamanio(){
        return this.#tamanio;
    }
    set tamanio(nuevoTamanio){
        this.#tamanio = nuevoTamanio;
    }
    aniadirContacto(contacto){
        if(this.agendaLlena()){
            alert("agenda llena")
        } else {
            this.contactos.push(contacto);
        }
    }
    existeContacto(contacto){
        for(let nroContacto = 0; nroContacto < this.contactos.length; nroContacto++){
            if(this.contactos[nroContacto].nombre=== contacto.nombre && this.contactos[nroContacto].telefono === contacto.telefono){
                document.write(`El contacto de nombre ${contacto.nombre} y telefono ${contacto.telefono} existe.`);
            }
        }
    }
    listarContactos(){
        document.write(`<ul>`);
        for(let nroContacto = 0; nroContacto < this.contactos.length; nroContacto++){
            document.write(`<h4>Contacto ${nroContacto+1}</h4>
                            <li>${this.contactos[nroContacto].nombre}: ${this.contactos[nroContacto].telefono}</li>`);
        }
        document.write(`</ul>`);
    }
    buscarContacto(nombre){
        for(let nroContacto = 0; nroContacto < this.contactos.length; nroContacto++){
            if(this.contactos[nroContacto].nombre === nombre){
                document.write(`El telefono del contacto ${this.contactos[nroContacto].nombre} es: ${this.contactos[nroContacto].telefono}`)
            }
        }
    }
    eliminarContacto(indice){
        return this.contactos.splice(indice,1);
    }
    agendaLlena(){
        if(this.contactos.length === this.tamanio){
            document.write("<p>Agenda llena, no puede seguir ingresando contactos</p>");
            return true;
        } else{
            return false;
        }
    }
    huecosLibres(){
        if(this.contactos.length < this.tamanio){
            let huecosLibres = this.tamanio - this.contactos.length;
            document.write(`<p>Espacios libres de la agenda: ${huecosLibres}</p>`);
            console.log(`Espacios libres de la agenda: ${huecosLibres}`);
        } else {
            this.agendaLlena();
        }
    }
}

const agenda = new Agenda(10);

do{
    const opcion = prompt(`Seleccione una opción: 1- añadir contacto, 2- consultar existencia, 3- listar contactos, 4- buscar contacto, 5- eliminar contacto, 6- agenda llena, 7- huecos libres`);
    switch(opcion){
        case "1":
            const nombre = prompt("Ingrese un nombre");
            const telefono = prompt("Ingrese un telefono");
            const contacto = new Contacto(nombre,telefono);
            agenda.aniadirContacto(contacto);
            console.log(agenda.contactos);
            break;
        case "2":
            const nombreExistente = prompt("Ingrese un nombre");
            const telefonoExistente = prompt("Ingrese un telefono");
            const contactoExistente = new Contacto(nombreExistente,telefonoExistente);
            agenda.existeContacto(contactoExistente);
            break;
        case "3":
            agenda.listarContactos();
            break;
        case "4":
            const nombreContacto = prompt("Ingrese un nombre");
            agenda.buscarContacto(nombreContacto);
            break;
        case "5":
            const indice = parseInt(prompt("Ingrese el numero del contacto que desea eliminar"));
            agenda.eliminarContacto(indice);
            break;
        case "6":
            agenda.agendaLlena();
            break;
        case "7":
            agenda.huecosLibres();
            break;
    } 
}while (confirm("¿Desea ingresar otra opcion?"));