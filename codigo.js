"use strict";
//Programa Princiapl
var oUPOCampo = new UpoCampo();
var divListado = document.getElementById("listado");

/*--------------EVENTOS DE MENU----------------*/

/*---------------MENU ALTA-------------*/

var menuAltaCliente = document.getElementById("altaCliente");
menuAltaCliente.addEventListener("click", altaCliente, false);

var menuAltaReserva = document.getElementById("altaReserva");
menuAltaReserva.addEventListener("click", altaReserva, false);

var menuAltaProveedor = document.getElementById("altaProveedor");
menuAltaProveedor.addEventListener("click", altaProveedor, false);

var menuAltaActividad = document.getElementById("altaActividad");
menuAltaActividad.addEventListener("click", altaActividad, false);


/*---------------MENU BAJA-------------*/

var menuBajaCliente = document.getElementById("bajaCliente");
menuBajaCliente.addEventListener("click", bajaCliente, false);

var menuBajaReserva = document.getElementById("bajaReserva");
menuBajaReserva.addEventListener("click", bajaReserva, false);



/*---------------MENU MODIFICAR-------------*/

var menuModificarCliente = document.getElementById("modificarCliente");
menuModificarCliente.addEventListener("click", modificarCliente, false);

var menuModificarReserva = document.getElementById("modificarReserva");
menuModificarReserva.addEventListener("click", modificarReserva, false);





/*---------------ACEPTAR ALTA--------------------*/

var botonAltaCliente = document.getElementById("btnAceptarAltaCliente");
botonAltaCliente.addEventListener("click", aceptarAltaCliente, false);

var botonAltaReserva = document.getElementById("btnAceptarAltaReserva");
botonAltaReserva.addEventListener("click", aceptarAltaReserva, false);

var botonAltaProveedor = document.getElementById("btnAceptarAltaProveedor");
botonAltaProveedor.addEventListener("click", aceptarAltaProveedor, false);

var botonAltaActividad = document.getElementById("btnAceptarAltaActividades");
botonAltaActividad.addEventListener("click", aceptarAltaActividade, false);


/*---------------ACEPTAR BAJA--------------------*/

var botonBajaCliente = document.getElementById("btnAceptarBajaCliente");
botonBajaCliente.addEventListener("click", aceptarBajaCliente, false);

var botonBajaReserva = document.getElementById("btnAceptarBajaReserva");
botonBajaReserva.addEventListener("click", aceptarBajaReserva, false);


/*---------------ACEPTAR MODIFICAR--------------------*/

var botonModificarCliente = document.getElementById("btnAceptarModificarCliente");
botonModificarCliente.addEventListener("click", aceptarModificarCliente, false);

var botonModificarReserva = document.getElementById("btnAceptarModificarReserva");
botonModificarReserva.addEventListener("click", aceptarModificarReserva, false);


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

function aceptarBajaCliente(){
    alert("bcbcbcbc");
}

function aceptarBajaReserva(){
    alert("aqwert");
}

function aceptarModificarCliente(){
    alert("qqqqq");
}

function aceptarModificarReserva(){
	alert("mmmmm");
}
function aceptarAltaActividade(){
    alert("ñam ñam");
}

//Mostrar Formularios

//Mostrar formulario cliente(anadir los otros formularios mientras los vais creando)
function altaCliente() {
    frmAltaCliente.style.display = "block";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmBajaCliente.style.display = "none";
    frmBajaReserva.style.display = "none";
    frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";
}

function altaReserva() {
	frmAltaReserva.style.display = "block";
	frmAltaCliente.style.display = "none";
	frmAltaProveedor.style.display = "none";
	frmBajaCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function altaProveedor() {
	frmAltaProveedor.style.display = "block";
	frmAltaReserva.style.display = "none";
	frmAltaCliente.style.display = "none";
	frmBajaCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function bajaCliente() {
	frmBajaCliente.style.display = "block";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmBajaReserva.style.display = "none";
    frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function bajaReserva() {
	frmBajaReserva.style.display = "block";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function modificarCliente() {
	frmModificarCliente.style.display = "block";
	frmBajaReserva.style.display = "none";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function modificarReserva() {
	frmModificarReserva.style.display = "block";
	frmModificarCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmAltaActividades.style.display = "none";

}
function altaActividad(){
    frmAltaActividades.style.display = "block";  
    frmModificarReserva.style.display = "none";
	frmModificarCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
}