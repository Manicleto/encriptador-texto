function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado=texto
        .replace(/i/gi, "imes")
        .replace(/e/gi, "enter")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        if (texto.length!=0) {
            texto = document.getElementById("texto").value=textoCifrado;
            tituloMensaje.textContent= "Texto encriptado con exito";
            parrafo.textContent = "";
            muñeco="./img/encriptado.jpg";
        }else{
            muñeco="./img/meñeco.jpg";
            tituloMensaje.textContent="Ningun mensaje fue encontrado"
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
            alert("Debes ingresar algun texto");
        }
}