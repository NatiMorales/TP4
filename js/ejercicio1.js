const auto = {
    color: "Rojo",
    marca: "FIAT",
    modelo: "Palio",

    encender: function(){
        document.write("<p>Auto Encendido</p>");
    },
    apagar: function(){
        document.write("El auto se apagó");
    }
}
document.write(`<p>El auto es de color: ${auto.color}</p>`);
document.write(`<p>El auto es de marca: ${auto.marca}</p>`);
document.write(`<p>El auto es del modelo: ${auto.modelo}</p>`);
auto.encender();
auto.apagar();