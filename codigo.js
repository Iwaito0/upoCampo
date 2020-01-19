"use strict";
//Programa Princiapl
var oUPOCampo = new UpoCampo();
var divListado = document.getElementById("listado");

/*--------------EVENTOS DE MENU----------------*/

/*---------------MENU ALTA-------------*/

var menuAltaCliente = document.getElementById("altaCliente");
menuAltaCliente.addEventListener("click", mostrarAltaCliente, false);

var menuAltaReserva = document.getElementById("altaReserva");
menuAltaReserva.addEventListener("click", mostrarAltaReserva, false);

var menuAltaProveedor = document.getElementById("altaProveedor");
menuAltaProveedor.addEventListener("click", mostrarAltaProveedor, false);

var menuAltaActividad = document.getElementById("altaActividad");
menuAltaActividad.addEventListener("click", mostrarAltaActividad, false);


/*---------------MENU BAJA-------------*/

var menuBajaCliente = document.getElementById("bajaCliente");
menuBajaCliente.addEventListener("click", mostrarBajaCliente, false);

var menuBajaReserva = document.getElementById("bajaReserva");
menuBajaReserva.addEventListener("click", mostrarBajaReserva, false);



/*---------------MENU MODIFICAR-------------*/

var menuModificarCliente = document.getElementById("modificarCliente");
menuModificarCliente.addEventListener("click", mostrarModificarCliente, false);

var menuModificarReserva = document.getElementById("modificarReserva");
menuModificarReserva.addEventListener("click", mostrarModificarReserva, false);





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
    // Recoger valores del formulario
    let sDni = frmAltaCliente.txtNifAlta.value.trim();
    let sNombre = frmAltaCliente.txtNombreClienteAlta.value.trim();
    let iTelefono = parseInt(frmAltaCliente.txtTelefonoClienteAlta.value.trim());
    let sDireccion = frmAltaCliente.txtDireccionAlta.value.trim();
    let sEmail = frmAltaCliente.txtEmailAlta.value.trim();
    let iNumTarjeta = parseInt(frmAltaCliente.txtNTarjetaAlta.value.trim());

    // Creamos el objeto cliente
    let oCliente = new Cliente(sDni, sNombre, iTelefono, sDireccion, sEmail, iNumTarjeta);

    // Alta de cliente en UPOCAMPO
    let sMensaje = oUPOCampo.altaCliente(oCliente);

    alert(sMensaje);
    frmAltaCliente.reset();
}

function aceptarAltaReserva(){
    // Recoger valores del formulario
    let iID = parseInt(frmAltaReserva.txtIdAlta.value.trim());
    let iNumPersonas = parseInt(frmAltaReserva.txtNumAlta.value.trim());
    let dCheckin = frmAltaReserva.txtEntradaAlta.value.trim();
    let dCheckout = frmAltaReserva.txtSalidaAlta.value.trim();
    let fPrecio = parseFloat(frmAltaReserva.txtPrecioAlta.value.trim());

    // Creamos el objeto reserva
    let oReserva = new Reservas(iID, iNumPersonas, dCheckin, dCheckout, fPrecio);

    // Alta de reserva en UPOCAMPO
    let sMensaje = oUPOCampo.altaReserva(oReserva);

    alert(sMensaje);
    frmAltaReserva.reset();
}

function aceptarAltaProveedor(){
    // Recoger valores del formulario
    let sCIF = frmAltaProveedor.txtCifAlta.value.trim();
    let sNombre = frmAltaProveedor.txtNombreProveedorAlta.value.trim();
    let iTelefono = frmAltaProveedor.txtTelefonoProveedorAlta.value.trim();

    // Creamos el objeto proveedor
    let oProveedor = new Proveedores(sCIF, sNombre, iTelefono);

    // Alta de proveedor en UPOCAMPO
    let sMensaje = oUPOCampo.altaProveedor(oProveedor);

    alert(sMensaje);
    frmAltaProveedor.reset();
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
function mostrarAltaCliente() {
    frmAltaCliente.style.display = "block";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmBajaCliente.style.display = "none";
    frmBajaReserva.style.display = "none";
    frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";
}

function mostrarAltaReserva() {
	frmAltaReserva.style.display = "block";
	frmAltaCliente.style.display = "none";
	frmAltaProveedor.style.display = "none";
	frmBajaCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function mostrarAltaProveedor() {
	frmAltaProveedor.style.display = "block";
	frmAltaReserva.style.display = "none";
	frmAltaCliente.style.display = "none";
	frmBajaCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function mostrarBajaCliente() {
	frmBajaCliente.style.display = "block";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmBajaReserva.style.display = "none";
    frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function mostrarBajaReserva() {
	frmBajaReserva.style.display = "block";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmModificarCliente.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function mostrarModificarCliente() {
	frmModificarCliente.style.display = "block";
	frmBajaReserva.style.display = "none";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmModificarReserva.style.display = "none";
    frmAltaActividades.style.display = "none";

}

function mostrarModificarReserva() {
	frmModificarReserva.style.display = "block";
	frmModificarCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmAltaActividades.style.display = "none";

}
function mostrarAltaActividad(){
    frmAltaActividades.style.display = "block";  
    frmModificarReserva.style.display = "none";
	frmModificarCliente.style.display = "none";
	frmBajaReserva.style.display = "none";
	frmBajaCliente.style.display = "none";
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
}
//Datos prueba de habitaciones

oUPOCampo.altaHabitacion(new Habitacion(0, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(1, "doble", 40.50, 4));
oUPOCampo.altaHabitacion(new Habitacion(2, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(3, "doble", 40.50, 4));
oUPOCampo.altaHabitacion(new Habitacion(4, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(5, "doble", 40.50, 4));
oUPOCampo.altaHabitacion(new Habitacion(6, "doble", 40.50, 4));
oUPOCampo.altaHabitacion(new Habitacion(7, "doble", 40.50, 4));
oUPOCampo.altaHabitacion(new Habitacion(8, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(9, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(10, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(11, "simple", 28.90, 2));
oUPOCampo.altaHabitacion(new Habitacion(12, "doble", 40.50, 4));
oUPOCampo.altaHabitacion(new Habitacion(13, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(14, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(15, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(16, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(17, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(18, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(19, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(20, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(21, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(22, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(23, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(24, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(25, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(26, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(27, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(28, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(29, "triple", 75.95, 6));
oUPOCampo.altaHabitacion(new Habitacion(30, "premium", 149.99, 2));
oUPOCampo.altaHabitacion(new Habitacion(31, "premium", 149.99, 2));
oUPOCampo.altaHabitacion(new Habitacion(32, "premium", 149.99, 2));
oUPOCampo.altaHabitacion(new Habitacion(33, "premium", 149.99, 2));
oUPOCampo.altaHabitacion(new Habitacion(34, "premium", 149.99, 2));
oUPOCampo.altaHabitacion(new Habitacion(35, "premium", 149.99, 2));



