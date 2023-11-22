class Persona{
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #fechaNacimiento;

    constructor(nombre,edad,sexo,peso,altura,fechaNacimiento){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = this.generarDni().toString();
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#fechaNacimiento = fechaNacimiento;
    }

    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre !== " "){
            this.edad = nuevoNombre;
        } else {
            alert("Nombre no valido");
        }
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){
        if(nuevaEdad >= 0){
            this.#edad = nuevaEdad;
        } else {
            alert("Edad no válida");
        }
    }
    get dni(){
        return this.#dni;
    }
    set dni(nuevoDni){
        this.#dni = nuevoDni;
    }
    get sexo(){
        return this.#sexo.toUpperCase();
    }
    set sexo(nuevoSexo){
        if(nuevoSexo == "F" || nuevoSexo == "f" || nuevoSexo == "M" || nuevoSexo == "m"){
            this.#sexo = nuevoSexo;
        } else {
            alert("Sexo no válido");
        }
    }
    get peso(){
        return this.#peso;
    }
    set peso(nuevaPeso){
        if(nuevaPeso >= 0.0 && nuevaPeso <= 500){
            this.#peso = nuevaPeso;
        } else {
            alert("Peso no válida");
        }
    }
    get altura(){
        return this.#altura;
    }
    set altura(nuevaAltura){
        if(nuevaAltura >= 0.0 && nuevaAltura <= 3.0){
            this.#altura = nuevaAltura;
        } else {
            alert("Altura no válida");
        }
    }
    get fechaNacimiento(){
        return this.#fechaNacimiento;
    }
    set fechaNacimiento(nuevaFechaNacimiento){
        if(nuevaFechaNacimiento >= 0){
            this.#fechaNacimiento = nuevaFechaNacimiento;
        } else {
            alert("Fecha de nacimiento no válida");
        }
    }


    mostrarGeneracion(){
        switch(true){
            case ((this.fechaNacimiento >= 1930) && (this.fechaNacimiento <= 1948)):
                document.write("<p>Rasgo característico: Auteridad</p>");
                break;
            case ((this.fechaNacimiento >= 1949) && (this.fechaNacimiento <= 1968)):
                document.write("<p>Rasgo característico: Ambición</p>");
                break;
            case ((this.fechaNacimiento >= 1969) && (this.fechaNacimiento <= 1980)):
                document.write("<p>Rasgo característico: Obseción por el éxito</p>");
                break;
            case ((this.fechaNacimiento >= 1981) && (this.fechaNacimiento <= 1993)):
                document.write("<p>Rasgo característico: Frustración</p>");
                break;
            case ((this.fechaNacimiento >= 1994) && (this.fechaNacimiento <= 2010)):
                document.write("<p>Rasgo característico: Irreverencia</p>");
                break;
            default:
                document.write("<p>Rasgo característico: </p>");
                break;
        }
    }
    esMayorDeEdad(){
        if(this.edad >= 18){
            document.write("<p>Es mayor de edad</p>");
        } else {
            document.write("<p>Es menor de edad</p>");
        }
    }
    mostrarDatos(){
        document.write(`<h4>Datos</h4>
                        <ul>
                        <li>Nombre: ${this.nombre}</li>
                        <li>Edad: ${this.edad}</li>
                        <li>DNI: ${this.dni}</li>
                        <li>Sexo: ${this.sexo}</li>
                        <li>Peso: ${this.peso}</li>
                        <li>Altura: ${this.altura}</li>
                        <li>Fecha de Nacimiento: ${this.fechaNacimiento}</li>
                        </ul>`);
    }
    generarDni(){
        return Math.floor(Math.random() * 99999999);      
    }

}

const persona1 = new Persona("natalia", 25, "F", 46, 1.55, 1998);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();