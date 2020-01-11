"use strict";
//Programa Princiapl
var oUPOCampo = new UpoCampo();
var divListado = document.getElementById("listado");

var boton=document.getElementById("btnAceptar");
boton.addEventListener("click",prueba);

function prueba(){
    alert("asdasd");
}
//Mostrar Formularios

//Mostrar formulario cliente(anadir los otros formularios mientras los vais creando)
function altaCliente() {
    frmAltaCliente.style.display = "block";
}
