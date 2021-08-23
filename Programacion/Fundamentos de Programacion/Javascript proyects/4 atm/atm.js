
alert("ailucha es la más bella!")
class Billete { 
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = new Image();
        this.imagen.src = url[valor]
        
    }
};

var url = [];
url["10"] ="imagenes/10pe.jpeg";
url["50"] ="imagenes/50pe.jpeg";
url["100"] ="imagenes/100pe.jpeg";

// esto es para tener una botonera a la que le pongas el monto a extraer!ª
var dad = document.getElementById("botoncito");
dad.addEventListener("click", dataDinero);
var dad2 = document.getElementById("botoncito2");
dad2.addEventListener("click", clearDinero);
// esto es para hacer click en botonera
var teclaEnter = document.getElementById("dinero");
addEventListener("keydown", teclaIntro); 690

// esto es para tener donde poner resultado
var responderAca = document.getElementById("res");
var imagenCaja = document.getElementById("caja");


var necesitoStock = false;
var billeteIn = [];

//solo estan para cargar billeteIn mas rapido
var nomin = [100, 50, 10];
var cantidad = [40, 10, 90];
var output;
var billeteOut = [];


for (var i in nomin) {
    billeteIn[i] = new Billete(nomin[i], cantidad[i])
};
for (var i of billeteIn){
    imagenCaja.innerHTML += i.cantidad + " billetes de $" + i.valor + "<br/>"
}

function dataDinero() {
    imagenCaja.innerHTML = ""
    imagenCaja.innerHTML = "Nos queda en cajero:<br/>"
    responderAca.innerHTML = ""

    var montoImputado = document.getElementById("dinero").value;

    for (var i in nomin) {
        output = Math.floor(montoImputado / billeteIn[i].valor);

        if (output > billeteIn[i].cantidad) {
            output = billeteIn[i].cantidad;
        }

        billeteOut[i] = new Billete(billeteIn[i].valor, output);
        montoImputado = montoImputado - billeteOut[i].cantidad * billeteOut[i].valor;

    }
    if (montoImputado > 0) {
        alert("cantidad de billetes insufiente para poder efectuar el retiro, lo sentimos")
        necesitoStock = true;
    }
    else {
        for (var i in billeteOut) {

            if (!(billeteOut[i].cantidad == 0)) {

                responderAca.innerHTML = responderAca.innerHTML + "<br/>" + billeteOut[i].cantidad + " billete/s de " + billeteOut[i].valor + "<br/>";
                for(x = 0; x<billeteOut[i].cantidad;x++)
                    {
                        responderAca.innerHTML += '<img src="'+billeteOut[i].imagen.src+'" width = "250">';
                    };
                billeteIn[i].cantidad = billeteIn[i].cantidad - billeteOut[i].cantidad;

            }
        }
    }
    for (var i of billeteIn){
        imagenCaja.innerHTML += i.cantidad + " billetes de $" + i.valor + "<br/>"
    }
}
function clearDinero() {
    responderAca.innerHTML = ""
}

function teclaIntro(evento) {
    if (evento.keyCode == 13) {
        dataDinero()
    }
}