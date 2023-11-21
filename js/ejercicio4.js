class Producto{
    #codigo;
    #nombre;
    #precio;

    constructor(codigo,nombre,precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get codigo(){
        return this.#codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    get precio(){
        return this.#precio;
    }

    mostrarDatos(){
        document.write(`<ul>
                        <li>Código: ${this.codigo}</li>
                        <li>Nombre: ${this.nombre}</li>
                        <li>Precio: ${this.precio}</li>
                        </ul>`);
    }
}
const arregloProductos = [];
const producto1 = new Producto(9999,"Remera",4.55);
arregloProductos.push(producto1);

const producto2 = new Producto(8888,"Pantalon",4.55);
arregloProductos.push(producto2);

const producto3 = new Producto(7777,"Camisa",4.55);
arregloProductos.push(producto3);

for(i=0; i<arregloProductos.length;i++){
    arregloProductos[i].mostrarDatos();
}
