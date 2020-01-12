"use strict";
//Programa Princiapl
var oUPOCampo = new UpoCampo();
var divListado = document.getElementById("listado");

/*--------------EVENTOS DE MENU----------------*/

var menuAltaCliente = document.getElementById("altaCliente");
menuAltaCliente.addEventListener("click", altaCliente, false);

var menuAltaReserva = document.getElementById("altaReserva");
menuAltaReserva.addEventListener("click", altaReserva, false);

var menuAltaProveedor = document.getElementById("altaProveedor");
menuAltaProveedor.addEventListener("click", altaProveedor, false);


/*---------------ACEPTAR ALTA--------------------*/

var botonAltaCliente = document.getElementById("btnAceptarAltaCliente");
botonAltaCliente.addEventListener("click", aceptarAltaCliente, false);

var botonAltaReserva = document.getElementById("btnAceptarAltaReserva");
botonAltaReserva.addEventListener("click", aceptarAltaReserva, false);

var botonAltaProveedor = document.getElementById("btnAceptarAltaProveedor");
botonAltaProveedor.addEventListener("click", aceptarAltaProveedor, false);


/*-------------FUNCIONES-----------------*/

function aceptarAltaCliente(){
    alert("asdasd");
}

function aceptarAltaReserva(){
    alert("abcd");
}

function aceptarAltaProveedor(){
    alert("abcdefghi");
}
//Mostrar Formularios

//Mostrar formulario cliente(anadir los otros formularios mientras los vais creando)
function altaCliente() {
    frmAltaCliente.style.display = "block";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
}

function altaReserva() {
	frmAltaReserva.style.display = "block";
	frmAltaCliente.style.display = "none";
	frmAltaProveedor.style.display = "none";
}

function altaProveedor() {
	frmAltaProveedor.style.display = "block";
	frmAltaReserva.style.display = "none";
	frmAltaCliente.style.display = "none";
}