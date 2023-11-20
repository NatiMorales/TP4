class Rectangulo{
    #alto;
    #ancho;
    
    constructor(alto, ancho){
        this.#alto = alto;
        this.#ancho = ancho;
    }
    get alto(){
        return this.#alto;
    }
    get ancho(){
        return this.#ancho;
    }
  
    mostrarDatos(){
        document.write(`<ul>
                        <li>Alto: ${this.alto}</li>
                        <li>Ancho: ${this.ancho}</li>
                        </ul>`);
    }
    calcularPerimetro(){
        return (this.alto + this.ancho) * 2;
    }
    calcularArea(){
        return this.alto * this.ancho;
    }
}
const rectangulo1 = new Rectangulo(6,4);
const rectangulo2 = new Rectangulo(2,5);
rectangulo1.mostrarDatos();
document.write(`<p>Perimetro: ${rectangulo1.calcularPerimetro()}</p>`);
document.write(`<p>Area: ${rectangulo1.calcularArea()}</p>`);
rectangulo2.mostrarDatos();
document.write(`<p>Perimetro: ${rectangulo2.calcularPerimetro()}</p>`);
document.write(`<p>Area: ${rectangulo2.calcularArea()}</p>`);