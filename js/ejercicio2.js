const cuenta = {
    titular: "Alex",
    saldo: 0.0,

    ingresar: function(cantidad){
        this.saldo = this.saldo + cantidad;
    },
    extraer: function(cantidad){
        this.saldo = this.saldo - cantidad;
    },
    informar: function(){
        document.write(`<p>Saldo: ${this.saldo}</p>`);
    }
}
cuenta.informar();
cuenta.ingresar(33);
cuenta.informar();
cuenta.extraer(10);
cuenta.informar();