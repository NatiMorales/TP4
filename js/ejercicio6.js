class Libro{
    #ISBN;
    #titulo;
    #autor;
    #nroPaginas;

    constructor(ISBN, titulo, autor, nroPaginas){
        this.#ISBN = ISBN;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#nroPaginas = nroPaginas;
    }

    get ISBN(){
        return this.#ISBN;
    }
    set ISBN(nuevoISBN){
        if(nuevoISBN > 0){
            this.#ISBN = nuevoISBN;
        } else {
            alert("ISBN inválido");
        }
    }
    get titulo(){
        return this.#titulo;
    }
    set titulo(nuevoTitulo){
        if(nuevoTitulo !== " "){
            this.#titulo =  nuevoTitulo;
        } else {
            alert("Titulo inválido");
        }
    }
    get autor(){
        return this.#autor;
    }
    set autor(nuevoAutor){
        if(nuevoAutor !== " "){
            this.#autor = nuevoAutor;
        } else {
            alert("Autor inválido");
        }
    }
    get nroPaginas(){
        return this.#nroPaginas;
    }
    set nroPaginas(nuevoNroPaginas){
        if(nuevoNroPaginas > 0){
            this.#nroPaginas = nuevoNroPaginas;
        } else {
            alert("Número de páginas inválido");
        }
    }
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.nroPaginas} páginas.</p>`);
    }
}

const libro1 = new Libro(9788437604572, "Rayuela", "Julio Cortázar", 728);
const libro2 = new Libro(9783140464079, "El Principito", "Antoine de Saint-Exupéry", 120);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.nroPaginas > libro2.nroPaginas){
    document.write(`<p>El libro ${libro1.titulo} tiene más paginas.</p>`);
} else {
    document.write(`<p>El libro ${libro2.titulo} tiene más paginas.</p>`);
}