function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let inicio = document.getElementById("inicio");


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
       // parrafo.textContent = "";
        inicio.src = "../img/alisondaque.gif";
    } else {
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algun texto");
        inicio.src = "../img/angiedaque.gif";
    }
} 

function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        inicio.src = "img/evelindaque.gif";
    } else
        inicio.src = "img/stick.gif";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    alert("Debes ingresar algun texto");
}


