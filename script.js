/*var textoI = document.querySelector("inputTxtI");
textoI.focus();
function encriptar(){
   
    return textoI.toLowerCase();
    
}
var btnEncriptar = document.querySelector("btnEn");
btnEncriptar.onclick = encriptar();
*/

function encriptar(){
    var texto = document.getElementById("inputTxtI").value.toLowerCase();

    var textoE = texto.replace(/e/img, "enter");
    var textoE = textoE.replace(/o/img, "ober");
    var textoE = textoE.replace(/i/img, "imes");
    var textoE = textoE.replace(/a/img, "ai");
    var textoE = textoE.replace(/u/img, "ufat");

    document.getElementById("txtArea").innerHTML = textoE;
    
    //para hacer que se muestre el boton copiar al hacer click en este boton
    document.getElementById("btnCopy").style.display = "show";
    document.getElementById("btnCopy").style.display ="inherit";
    //ocultar la imagen
    document.getElementById("imagBuscar").style.display = "none";

}
function desencriptar(){
    var texto = document.getElementById("inputTxtI").value.toLowerCase();

    var textoE = texto.replace(/enter/img, "e");
    var textoE = textoE.replace(/ober/img, "o");
    var textoE = textoE.replace(/imes/img, "i");
    var textoE = textoE.replace(/ai/img, "a");
    var textoE = textoE.replace(/ufat/img, "u");

    document.getElementById("txtArea").innerHTML = textoE;

    //para hacer que se muestre el boton copiar al hacer click en este boton
    document.getElementById("btnCopy").style.display = "show";
    document.getElementById("btnCopy").style.display ="inherit"

    //ocultar la imagen
    document.getElementById("imagBuscar").style.display = "none";

}
function copiar(){
    var textoResultado = document.querySelector("#txtArea");
    textoResultado.select();
    document.execCommand("copy");
}
