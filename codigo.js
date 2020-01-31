"use strict";
//Programa Princiapl
var oUPOCampo = new UpoCampo();
var divListado = document.getElementById("listado");

var selectParkLista = document.getElementById("selectListaHab");
var selectParkMod = document.getElementById("selectListaHabModificar");
selectParkMod.disabled = true;
var selectRegAlta = document.getElementById("selectListaReg");
var selectRegMod = document.getElementById("selectListaRegModificar");
selectRegMod.disabled = true;

var dFechaIni = new Date();
var dFechaFin = new Date();
var iNumMaxPersonas = 0;
var aDatosReserva = [];
var aActividadesElegidas = [];

datosHabitaciones();
datosParking();
datosRegimen();
datosCliente();
datosActividad();
datosProveedor();
datosReservas();

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

var divReservaComprobada = document.getElementById("divReservaComprobada");

/*---------------MENU BAJA-------------*/

var menuBajaCliente = document.getElementById("bajaCliente");
menuBajaCliente.addEventListener("click", mostrarBajaCliente, false);

var menuBajaReserva = document.getElementById("bajaReserva");
menuBajaReserva.addEventListener("click", mostrarBajaReserva, false);

var menuBajaActividad = document.getElementById("bajaActividad");
menuBajaActividad.addEventListener("click", mostrarBajaActividad, false);

var menuBajaProveedor = document.getElementById("bajaProveedor");
menuBajaProveedor.addEventListener("click", mostrarBajaProveedor, false);

/*---------------MENU MODIFICAR-------------*/

var menuModificarCliente = document.getElementById("modificarCliente");
menuModificarCliente.addEventListener("click", mostrarModificarCliente, false);

var menuModificarReserva = document.getElementById("modificarReserva");
menuModificarReserva.addEventListener("click", mostrarModificarReserva, false);

var menuModificarActividad = document.getElementById("modificarActividad");
menuModificarActividad.addEventListener("click", mostrarModificarActividad, false);

var menuModificarProveedor = document.getElementById("modificarProveedor");
menuModificarProveedor.addEventListener("click", mostrarModificarProveedor, false);

/*--------------MENU LISTAR POR FILTRO--------------*/

/*--------------POR FECHA--------------*/

var menuListarCliRes = document.getElementById("listadoClientesPorFecha");
menuListarCliRes.addEventListener("click", mostrarListadoCliRes, false);

var menuListarResFecha = document.getElementById("listadoReservasPorFecha");
menuListarResFecha.addEventListener("click", mostrarListadoRes, false);

var menuListarHabDispFecha = document.getElementById("listadoHabDispFecha");
menuListarHabDispFecha.addEventListener("click", mostrarListadoHabDisp, false);

var menuListarParkDispFecha = document.getElementById("listadoParkDispFecha");
menuListarParkDispFecha.addEventListener("click", mostrarListadoParkDisp, false);

/*-------------POR RESERVA-------------*/

var menuListarParkRes = document.getElementById("listadoParkingReserva");
menuListarParkRes.addEventListener("click", mostrarListadoParkRes, false);

var menuListarRegRes = document.getElementById("listadoRegimenReserva");
menuListarRegRes.addEventListener("click", mostrarListadoRegRes, false);

var menuListarActRes = document.getElementById("listadoActividadReserva");
menuListarActRes.addEventListener("click", mostrarListadoActRes, false);

/*------------SELECCIONAR ELEMENTOS MODIFICAR------------*/

var seleccionarClienteModificar = document.getElementById("btnSeleccionarCliente");
seleccionarClienteModificar.addEventListener("click", seleccionarCliente, false);

var seleccionarReservaModificar = document.getElementById("btnSeleccionarReserva");
seleccionarReservaModificar.addEventListener("click", seleccionarReserva, false);

var seleccionarActividadesModificar = document.getElementById("btnSeleccionarActividades");
seleccionarActividadesModificar.addEventListener("click", seleccionarActividades, false);

var seleccionarProveedorModificar = document.getElementById("btnSelecionarProveedor");
seleccionarProveedorModificar.addEventListener("click", seleccionarProveedor, false);
/*---------------MENU LISTADOS GENERALES--------------------*/
var menuListadosActividades = document.getElementById("listadoActividades");
menuListadosActividades.addEventListener("click", listadosActividades, false);

var menuListadosProveedores = document.getElementById("listadoProveedores");
menuListadosProveedores.addEventListener("click", listadosProveedores, false);

var menuListadosClientes = document.getElementById("listadoClientes");
menuListadosClientes.addEventListener("click", listadosClientes, false);

var menuListadosReservas = document.getElementById("listadoReservas");
menuListadosReservas.addEventListener("click", listadosReservas, false);

var menuListadosHabitaciones = document.getElementById("listadoHabitaciones");
menuListadosHabitaciones.addEventListener("click", listadosHabitaciones, false);

var menuListadosParking = document.getElementById("listadoParking");
menuListadosParking.addEventListener("click", listadosParking, false);

/*-----------------------------FOCO-----------------------------*/

var recogerFechaInicio = document.getElementById("txtEntradaAlta");
recogerFechaInicio.addEventListener("blur", recogerFechaIni, false);

var recogerFechaFinal = document.getElementById("txtSalidaAlta");
recogerFechaFinal.addEventListener("blur", recogerFechaFin, false);

var recogerNumPersonas = document.getElementById("txtNumAlta");
recogerNumPersonas.addEventListener("blur", recogerNumPer, false);

var estadoHabParking = document.getElementById("siParking");
estadoHabParking.addEventListener("click", habDesParking, false);

var estadoDesParking = document.getElementById("noParking");
estadoDesParking.addEventListener("click", habDesParking, false);

var estadoHabActividad = document.getElementById("siActividad");
estadoHabActividad.addEventListener("click", habDesActividad, false);

var estadoDesActividad = document.getElementById("noActividad");
estadoDesActividad.addEventListener("click", habDesActividad, false);

/*--------------------------CANCELAR--------------------------*/

var botonCancelarClienteMod = document.getElementById("btnCancelarModificarCliente");
botonCancelarClienteMod.addEventListener("click", cancelarModificarCliente, false);

var botonCancelarReservaMod = document.getElementById("btnCancelarModificarReserva");
botonCancelarReservaMod.addEventListener("click", cancelarModificarReserva, false);

var botonCancelarActividadesMod = document.getElementById("btnACancelarModificarActividades");
botonCancelarActividadesMod.addEventListener("click", cancelarModificarActividades, false);

var botonCancelarProveedorMod = document.getElementById("btnCancelarProveedor");
botonCancelarProveedorMod.addEventListener("click", cancelarModificarProveedor, false);


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

var botonAceptarBajaActividad = document.getElementById("btnAceptarBajaActividad");
botonAceptarBajaActividad.addEventListener("click", aceptarBajaActividad, false);


var botonAceptarBajaProveedor = document.getElementById("btnAceptarBajaProveedor");
botonAceptarBajaProveedor.addEventListener("click", aceptarBajaProveedor, false);
/*---------------ACEPTAR MODIFICAR--------------------*/

var botonModificarCliente = document.getElementById("btnAceptarModificarCliente");
botonModificarCliente.addEventListener("click", aceptarModificarCliente, false);

var botonModificarReserva = document.getElementById("btnAceptarModificarReserva");
botonModificarReserva.addEventListener("click", aceptarModificarReserva, false);

var botonModificarActividad = document.getElementById("btnAceptarModificarActividades");
botonModificarActividad.addEventListener("click", aceptarModificarActividad, false);

var botonModificarProveedor = document.getElementById("btnModificarProveedor");
botonModificarProveedor.addEventListener("click", aceptarModificarProveedor, false);

/*---------------ACEPTAR LISTADO POR FILTRO---------------*/

var botonListarCliRes = document.getElementById("btnListarCliRes");
botonListarCliRes.addEventListener("click", aceptarListadoCliRes, false);

var botonListarResFecha = document.getElementById("btnListarResFecha");
botonListarResFecha.addEventListener("click", aceptarListadoResFecha, false);

var botonListarHabDisp = document.getElementById("btnListarHabDispFecha");
botonListarHabDisp.addEventListener("click", aceptarListadoHabDispFecha, false);

var botonListarParkDisp = document.getElementById("btnListarParkDispFecha");
botonListarParkDisp.addEventListener("click", aceptarListadoParkDispFecha, false);

/*--------BOTON COMPROBAR DATOS DE LA RESERVA--------*/

var botonComprobarDatosReserva = document.getElementById("btnComprobarDatos");
botonComprobarDatosReserva.addEventListener("click", comprobarDatosReserva, false);


/*-------------FUNCIONES-----------------*/
/*-------------ALTA-------------*/

function aceptarAltaCliente(){
    let sMensaje="";
    // Recoger valores del formulario
    let sDni = frmAltaCliente.txtNifAlta.value.trim();
    let sNombre = frmAltaCliente.txtNombreClienteAlta.value.trim();
    let iTelefono = parseInt(frmAltaCliente.txtTelefonoClienteAlta.value.trim());
    let sDireccion = frmAltaCliente.txtDireccionAlta.value.trim();
    let sEmail = frmAltaCliente.txtEmailAlta.value.trim();
    let iNumTarjeta = parseInt(frmAltaCliente.txtNTarjetaAlta.value.trim());

    if(!/^\d{8}[a-zA-Z]$/.test(sDni)){
        sMensaje+="El campo DNI esta mal\n";
        frmAltaCliente.txtNifAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtNifAlta.classList.remove("error");  
    }

    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmAltaCliente.txtNombreClienteAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtNombreClienteAlta.classList.remove("error");  
    }


    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmAltaCliente.txtTelefonoClienteAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtTelefonoClienteAlta.classList.remove("error");  
    }
    
    if(!/[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)*/.test(sDireccion)){
        sMensaje+="El campo direccion esta mal\n";
        frmAltaCliente.txtDireccionAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtDireccionAlta.classList.remove("error");  
    }

    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(sEmail)){
        sMensaje+="El campo email esta mal\n";
        frmAltaCliente.txtEmailAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtEmailAlta.classList.remove("error");  
    }
    if(!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/.test(iNumTarjeta)){
        sMensaje+="El campo del numero de la tarjeta esta mal(recuerde que son 16 numeros y que empieza por 4)\n";
        frmAltaCliente.txtNTarjetaAlta.classList.add("error");
    }
    else{
        frmAltaCliente.txtNTarjetaAlta.classList.remove("error");  
    }

    if(sMensaje==""){
    // Creamos el objeto cliente
    let oCliente = new Cliente(sDni, sNombre, iTelefono, sDireccion, sEmail, iNumTarjeta);

    // Alta de cliente en UPOCAMPO
    sMensaje = oUPOCampo.altaCliente(oCliente);
    alert(sMensaje);    
    frmAltaCliente.reset();    
    }
    else{
        alert(sMensaje);
    }
}

function recogerFechaIni(){
	dFechaIni = frmAltaReserva.txtEntradaAlta.value.trim();
	mostrarHabitaciones(selectParkLista);
    habDesParking();
    habDesActividad();
}

function recogerFechaFin(){
	dFechaFin = frmAltaReserva.txtSalidaAlta.value.trim();
	mostrarHabitaciones(selectParkLista);
    habDesParking();
    habDesActividad();
}

function recogerNumPer(){
	iNumMaxPersonas = parseInt(frmAltaReserva.txtNumAlta.value.trim());
	mostrarHabitaciones(selectParkLista);
}

function mostrarHabitaciones(aLista)  {
    aLista.length = 0;
    let aReserva = oUPOCampo.getArrayReservas();
    let aHabitaciones = oUPOCampo.getArrayHabitaciones();

    for (let i = 0; i < aHabitaciones.length; i++) {
        for (let j = 0; j < aReserva.length; j++) {
            if (aHabitaciones[i].id == aReserva[j].numHabitaciones) {
            	if ((aReserva[j].checkin > dFechaIni && aReserva[j].checkin <= dFechaFin && aReserva[j].checkout >= dFechaFin) || 
            		(aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaFin) || 
            		(aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaIni && aReserva[j].checkout < dFechaFin) || 
            		(aReserva[j].checkin > dFechaIni && aReserva[j].checkout < dFechaFin)) {
            		aHabitaciones.splice(i, 1);
                	i--;
            	}
            }
        }
        if (aHabitaciones[i].ocupacionMaxima < iNumMaxPersonas) {
    		aHabitaciones.splice(i, 1);
        	i--;
    	}
    }

    for (let i = 0; i < aHabitaciones.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aHabitaciones[i].id);
        let texto = document.createTextNode(aHabitaciones[i].id);
        opc.appendChild(texto);
        aLista.appendChild(opc);
    }
    
}

function mostrarParkingDisponibles() {
    document.getElementById("selectListaParking").length = 0;
    let aReserva = oUPOCampo.getArrayReservas();
    let aParking = oUPOCampo.getArrayParking();

    //alert(dFechaIni+" "+dFechaFin);

    for (let i = 0; i < aParking.length; i++) {
        for (let j = 0; j < aReserva.length; j++) {
            if (aParking[i].id == aReserva[j].parkingID) {
                if ((aReserva[j].checkin > dFechaIni && aReserva[j].checkin <= dFechaFin && aReserva[j].checkout >= dFechaFin) || 
                    (aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaFin) || 
                    (aReserva[j].checkin <= dFechaIni && aReserva[j].checkout >= dFechaIni && aReserva[j].checkout < dFechaFin) || 
                    (aReserva[j].checkin > dFechaIni && aReserva[j].checkout < dFechaFin)) {
                    aParking.splice(i, 1);
                    i--;
                }
            }
        }
    }

    for (let i = 0; i < aParking.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aParking[i].id);
        let texto = document.createTextNode(aParking[i].id);
        opc.appendChild(texto);
        document.getElementById("selectListaParking").appendChild(opc);
    }
}

function mostrarActividades() {
    document.getElementById("selectListaActividad").length = 0;
    let aReserva = oUPOCampo.getArrayReservas();
    let aActividad = oUPOCampo.getArrayActividades();

    for (let i = 0; i < aActividad.length; i++) {
        for (let j = 0; j < aReserva.length; j++) {
            if (aActividad[i].id == aReserva[j].actividadID)
            {
                aActividad.splice(i, 1);
                    i--;
            }
        }
    }

    for (let i = 0; i < aActividad.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aActividad[i].id);
        let texto = document.createTextNode(aActividad[i].nombre);
        opc.appendChild(texto);
        document.getElementById("selectListaActividad").appendChild(opc);
    }
}

function mostrarRegimenes(aLista) {
    aLista.length = 0;
    let aRegimen = oUPOCampo.buscarRegimen();

    for (let i = 0; i < aRegimen.length; i++) {
        let opc = document.createElement("option");
        opc.setAttribute("value", aRegimen[i].id);
        let texto = document.createTextNode(aRegimen[i].id);
        opc.appendChild(texto);
        aLista.appendChild(opc);
    }
}


function habDesParking() {
    
    let selectParking = document.getElementById("selectListaParking");

    if (estadoHabParking.checked) {
        mostrarParkingDisponibles();
        selectParking.style.display = "block";
    }
    else {
        selectParking.length = 0;
        selectParking.style.display = "none";
    }
}

function habDesActividad() {
    let selectActividad = document.getElementById("selectListaActividad");

    if (estadoHabActividad.checked) {
        mostrarActividades();
        selectActividad.style.display = "block";
    }
    else {
        selectActividad.length = 0;
        selectActividad.style.display = "none";
    }
}

function aceptarAltaReserva(){

        let iID = parseInt(frmAltaReserva.txtIdAlta.value.trim());
        let iNumPersonas = parseInt(frmAltaReserva.txtNumAlta.value.trim());
        let dCheckin = frmAltaReserva.txtEntradaAlta.value.trim();
        let dCheckout = frmAltaReserva.txtSalidaAlta.value.trim();
        let fPrecio = 0; //funcion totalPrecio
        let iNumHabitacion = parseInt(frmAltaReserva.selectListaHab.value.trim());
        let sNifCliente = frmAltaReserva.txtReservaClienteAlta.value.trim();
        let iParkingID = parseInt(frmAltaReserva.selectListaParking.value.trim());

        document.querySelectorAll("#selectListaActividad option:checked").forEach(eleccion=> aActividadesElegidas.push(oUPOCampo.buscarActividadSeleccionada(eleccion.value)));
        let iActividadID = parseInt(frmAltaReserva.selectListaActividad.value.trim());
        let sRegimenID = frmAltaReserva.selectListaReg.value.trim();
        
        // Creamos el objeto reserva
        let oReserva = new Reservas(iID, iNumPersonas, dCheckin, dCheckout, fPrecio, iNumHabitacion, sNifCliente, iParkingID, aActividadesElegidas.join(', '), sRegimenID);
        // Alta de reserva en UPOCAMPO
        let sMensaje = oUPOCampo.altaReserva(oReserva);
        alert(sMensaje);
        frmAltaReserva.reset();
        habDesParking();
        habDesActividad();
        mostrarRegimenes(); 
}


function obtenerTotalDiasReserva(entrada, salida)
{
    let ent = new Date(entrada);
    let sal = new Date(salida);

    ent.getTime();
    sal.getTime();

    let diff = sal-ent;

    return diff/(1000*60*60*24);

}

function aceptarAltaProveedor(){
    let sMensaje="";

    // Recoger valores del formulario
    let sCIF = frmAltaProveedor.txtCifAlta.value.trim();
    let sNombre = frmAltaProveedor.txtNombreProveedorAlta.value.trim();
    let iTelefono = parseInt(frmAltaProveedor.txtTelefonoProveedorAlta.value.trim());

    if(!/^\d{8}[a-zA-Z]$/.test(sCIF)){
        sMensaje+="El campo CIF esta mal.\n";
        frmAltaProveedor.txtCifAlta.classList.add("error");
    }
    else{
        frmAltaProveedor.txtCifAlta.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmAltaProveedor.txtNombreProveedorAlta.classList.add("error");
    }
    else{
        frmAltaProveedor.txtNombreProveedorAlta.classList.remove("error");  
    }
    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmAltaProveedor.txtTelefonoProveedorAlta.classList.add("error");
    }
    else{
        frmAltaProveedor.txtTelefonoProveedorAlta.classList.remove("error");  
    }


    if(sMensaje==""){
       // Creamos el objeto proveedor
       let oProveedor = new Proveedores(sCIF, sNombre, iTelefono);

       // Alta de proveedor en UPOCAMPO
       let sMensaje = oUPOCampo.altaProveedor(oProveedor);
       alert(sMensaje);
       frmAltaProveedor.reset();   
    }
    else{
        alert(sMensaje);
    }


}
function aceptarAltaActividade(){
    let sMensaje="";

    // Recoger valores del formulario
    let iID = frmAltaActividades.txtID.value.trim();
    let sNombre = frmAltaActividades.txtNombreClienteAlta.value.trim();

    if(!/^\d+$/.test(iID)){
        sMensaje+="El campo ID esta mal. El campo ID debe ser un numero\n";
        frmAltaActividades.txtID.classList.add("error");
    }
    else{
        frmAltaActividades.txtID.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmAltaActividades.txtNombreClienteAlta.classList.add("error");
    }
    else{
        frmAltaActividades.txtNombreClienteAlta.classList.remove("error");  
    }
    if(!/^[0-9]+([.][0-9]+)?$/.test(fPrecio)){
        sMensaje+="El campo precio esta mal (ten cuidado que el separador de decimales es el punto)\n";
        frmAltaActividades.txtPrecioAltaActividades.classList.add("error");
    }
    else{
        frmAltaActividades.txtPrecioAltaActividades.classList.remove("error");  
    }

    if(sMensaje==""){
       // Creamos el objeto proveedor
       let oActividad = new Actividades(iID, sNombre, fPrecio);

       // Alta de proveedor en UPOCAMPO
       let sMensaje = oUPOCampo.altaActividad(oActividad);
       alert(sMensaje);
       frmAltaActividades.reset();   
    }
    else{
        alert(sMensaje);
    }
}

/*-------------BAJA-------------*/

function aceptarBajaCliente(){
    // Recoger valores del formulario
    let sNif = frmBajaCliente.txtNifBaja.value.trim();

    // Baja de cliente en UPOCAMPO
    let sMensaje = oUPOCampo.bajaCliente(sNif);

    alert(sMensaje);
    frmBajaCliente.reset();
}

function aceptarBajaReserva(){
    // Recoger valores del formulario
    let iID = frmBajaReserva.txtIdBaja.value.trim();
    
    // Baja de reserva en UPOCAMPO
    let sMensaje = oUPOCampo.bajaReserva(iID);

    alert(sMensaje);
    frmBajaReserva.reset();
}
function aceptarBajaActividad(){
    // Recoger valores del formulario
    let iID = frmBajaActividad.txtIdBaja.value.trim();

    // Baja de reserva en UPOCAMPO
    let sMensaje = oUPOCampo.bajaActividad(iID);

    alert(sMensaje);
    frmBajaActividad.reset();
}
function aceptarBajaProveedor(){
    // Recoger valores del formulario
    let iID = frmBajaProveedores.txtIdBaja.value.trim();

    // Baja de reserva en UPOCAMPO
    let sMensaje = oUPOCampo.bajaProveedor(iID);

    alert(sMensaje);
    frmBajaProveedores.reset();
}


/*----COMPROBAR DATOS ALTA RESERVA-----*/
botonAltaReserva.disabled = true;
function comprobarDatosReserva()
{
    if (datosReservaCorrectos())
    {
        console.log("hace datosReservaCorrectos");
        activarBotonAltaReserva();
        let divReserva = document.getElementById("divReservaComprobada");
        let dCheckin = frmAltaReserva.txtEntradaAlta.value.trim();
        let dCheckout = frmAltaReserva.txtSalidaAlta.value.trim();
        let totalDias = obtenerTotalDiasReserva(dCheckin, dCheckout);
        let dias = document.createTextNode("Duración de la reserva: "+totalDias+" días");
        if (divReserva.hasChildNodes())
        {
            divReserva.firstChild.remove();
            console.log("He borrado el child dias");
        }
        
        divReserva.appendChild(dias);
        console.log("He añadido el child dias");
    }
    
    else
    {
        alert("Los datos no son correctos");
        botonAltaReserva.disabled = true;
    }
}

function activarBotonAltaReserva()
{
    if (botonAltaReserva.disabled == true)
    {
        botonAltaReserva.disabled = false;
    }
}



function datosReservaCorrectos()
{
    console.log("Entra en datosReserva");
    let sMensaje="";

    // Recoger valores del formulario
    let iID = parseInt(frmAltaReserva.txtIdAlta.value.trim());
    let iNumPersonas = parseInt(frmAltaReserva.txtNumAlta.value.trim());
    let dCheckin = frmAltaReserva.txtEntradaAlta.value.trim();
    let dCheckout = frmAltaReserva.txtSalidaAlta.value.trim();
    let fPrecio = 0; //funcion totalPrecio
    let iNumHabitacion = parseInt(frmAltaReserva.selectListaHab.value.trim());
    let sNifCliente = frmAltaReserva.txtReservaClienteAlta.value.trim();
    let iParkingID = parseInt(frmAltaReserva.selectListaParking.value.trim());

    let valores = document.querySelectorAll("#selectListaActividad");
    let iActividadID = parseInt(frmAltaReserva.selectListaActividad.value.trim());
    let sRegimenID = frmAltaReserva.selectListaReg.value.trim();
    let totalDias = obtenerTotalDiasReserva(dCheckin, dCheckout);

    if (isNaN(iParkingID)) {
        iParkingID = 0;
    }

    if(isNaN(iActividadID)){
        iActividadID = 0;
    }

    if(!/^\d+$/.test(iID)){
        sMensaje+="Introduce una ID válida\n";
        frmAltaReserva.txtIdAlta.classList.add("error");
    }
    else{
        frmAltaReserva.txtIdAlta.classList.remove("error");  
    }
    if(!/^\d+$/.test(iNumPersonas)){
        sMensaje+="El campo numero de personas esta mal\n";
        frmAltaReserva.txtNumAlta.classList.add("error");
    }
    else{
        frmAltaReserva.txtNumAlta.classList.remove("error");  
    }

    if (sMensaje != "")
    {
        alert(sMensaje);
    }
    else
    {
        aDatosReserva = [iID, iNumPersonas, dCheckin, dCheckout, fPrecio, iNumHabitacion, sNifCliente, iParkingID, iActividadID, sRegimenID];
        return true;
    }

}



/*-------------SELECCIONAR-------------*/

function seleccionarCliente(){
    let sNif = frmModificarCliente.txtNifModificar.value.trim();

    let botonSeleccionar = document.getElementById("btnSeleccionarCliente");
    let btnModificarCliente = document.getElementById("btnAceptarModificarCliente");
    let btnCacelarModCliente = document.getElementById("btnCancelarModificarCliente");
    let inputNif = document.getElementById("txtNifModificar");
    let inputNombre = document.getElementById("txtNombreClienteModificar");
    let inputTelefono = document.getElementById("txtTelefonoClienteModificar");
    let inputDireccion = document.getElementById("txtDireccionModificar");
    let inputEmail = document.getElementById("txtEmailModificar");
    let inputNumTarjeta = document.getElementById("txtNTarjetaModificar");

    let clienteSeleccionado = oUPOCampo.buscarCliente(sNif);

    if (clienteSeleccionado != "") {
        inputNif.disabled = true;
        botonSeleccionar.disabled = true;

        inputNombre.disabled = false;
        inputTelefono.disabled = false;
        inputDireccion.disabled = false;
        inputEmail.disabled = false;
        inputNumTarjeta.disabled = false;
        btnModificarCliente.disabled = false;
        btnCacelarModCliente.disabled = false;

        inputNombre.value = clienteSeleccionado[0].nombre;
        inputTelefono.value = clienteSeleccionado[0].telefono;
        inputDireccion.value = clienteSeleccionado[0].direccion;
        inputEmail.value = clienteSeleccionado[0].email;
        inputNumTarjeta.value = clienteSeleccionado[0].numeroTarjeta;
    }

    else {
        alert("No se encuentra ningun cliente con ese NIF");

        cancelarModificarCliente();
    }

}

function seleccionarReserva() {
    let iID = parseInt(frmModificarReserva.txtIdModificar.value.trim());

    let botonSeleccionar = document.getElementById("btnSeleccionarReserva");
    let btnModificarReserva = document.getElementById("btnAceptarModificarReserva");
    let btnCacelarModReserva = document.getElementById("btnCancelarModificarReserva");

    let inputId = document.getElementById("txtIdModificar");
    let inputNumPersonas = document.getElementById("txtNumModificar");
    let inputEntrada = document.getElementById("txtEntradaModificar");
    let inputSalida = document.getElementById("txtSalidaModificar");
    mostrarHabitaciones(selectParkMod);
    mostrarRegimenes(selectRegMod);

    let reservaSeleccionada = oUPOCampo.buscarReserva(iID);

    if (reservaSeleccionada != "") {
        inputId.disabled = true;
        botonSeleccionar.disabled = true;

        inputNumPersonas.disabled = false;
        inputEntrada.disabled = false;
        inputSalida.disabled = false;

        selectParkMod.disabled = false;
        selectRegMod.disabled = false;

        btnModificarReserva.disabled = false;
        btnCacelarModReserva.disabled = false;

        inputNumPersonas.value = reservaSeleccionada[0].numPersonas;
        inputEntrada.value = reservaSeleccionada[0].checkin;
        inputSalida.value = reservaSeleccionada[0].checkout;
    }

    else {
        alert("No se encuentra ninguna reserva con ese ID");

        cancelarModificarReserva();
    }
}
function seleccionarActividades(){
    let iID = parseInt(frmModificaActividades.txtID.value.trim());

    let botonSeleccionar = document.getElementById("btnSeleccionarActividades");
    let btnModificarActividades = document.getElementById("btnAceptarModificarActividades");
   let btnCacelarModActividades = document.getElementById("btnACancelarModificarActividades");

    let inputId = document.getElementById("txtIDModificarActividades");
    let inputNombre = document.getElementById("txtNombreActividadModifica");

    let ActividadSeleccionada = oUPOCampo.buscarActividad(iID);

    if (ActividadSeleccionada != "") {
        inputId.disabled = true;
        botonSeleccionar.disabled = true;

        inputNombre.disabled = false;

        btnModificarActividades.disabled = false;
        btnCacelarModActividades.disabled = false;

        inputNombre.value = ActividadSeleccionada[0].nombre;
    }

    else {
        alert("No se encuentra ninguna actividad con ese ID");

        cancelarModificarActividades();
    }

}
function seleccionarProveedor(){
    let iCIF =frmModificaProveedor.txtCifModifica.value.trim();

    let botonSeleccionar = document.getElementById("btnSelecionarProveedor");
    let btnModificarActividades = document.getElementById("btnModificarProveedor");
   let btnCacelarModActividades = document.getElementById("btnCancelarProveedor");

    let inputId = document.getElementById("txtCifModifica");
    let inputNombre = document.getElementById("txtNombreProveedorModifica");
    let inputTelefono = document.getElementById("txtTelefonoProveedorModifica");

    let ProveedorSeleccionado = oUPOCampo.buscarProveedor(iCIF);

    if (ProveedorSeleccionado != "") {
        inputId.disabled = true;
        botonSeleccionar.disabled = true;

        inputNombre.disabled = false;
        inputTelefono.disabled = false;

        btnModificarActividades.disabled = false;
        btnCacelarModActividades.disabled = false;

        inputNombre.value = ProveedorSeleccionado[0].nombre;
        inputTelefono.value = ProveedorSeleccionado[0].telefono;
    }

    else {
        alert("No se encuentra ningun proveedor con ese ID");

        cancelarModificarProveedor();
    } 
}



/*--------------CANCELAR--------------*/

function cancelarModificarCliente(){
    let botonSeleccionar = document.getElementById("btnSeleccionarCliente");
    let btnModificarCliente = document.getElementById("btnAceptarModificarCliente");
    let btnCacelarModCliente = document.getElementById("btnCancelarModificarCliente");
    let inputNif = document.getElementById("txtNifModificar");
    let inputNombre = document.getElementById("txtNombreClienteModificar");
    let inputTelefono = document.getElementById("txtTelefonoClienteModificar");
    let inputDireccion = document.getElementById("txtDireccionModificar");
    let inputEmail = document.getElementById("txtEmailModificar");
    let inputNumTarjeta = document.getElementById("txtNTarjetaModificar");

    inputNif.disabled = false;
    botonSeleccionar.disabled = false;

    inputNombre.disabled = true;
    inputTelefono.disabled = true;
    inputDireccion.disabled = true;
    inputEmail.disabled = true;
    inputNumTarjeta.disabled = true;
    btnModificarCliente.disabled = true;
    btnCacelarModCliente.disabled = true;

    frmModificarCliente.reset();
}

function cancelarModificarReserva(){
    let botonSeleccionar = document.getElementById("btnSeleccionarReserva");
    let btnModificarReserva = document.getElementById("btnAceptarModificarReserva");
    let btnCacelarModReserva = document.getElementById("btnCancelarModificarReserva");

    let inputId = document.getElementById("txtIdModificar");
    let inputNumPersonas = document.getElementById("txtNumModificar");
    let inputEntrada = document.getElementById("txtEntradaModificar");
    let inputSalida = document.getElementById("txtSalidaModificar");

    inputId.disabled = false;
    botonSeleccionar.disabled = false;

    inputNumPersonas.disabled = true;
    inputEntrada.disabled = true;
    inputSalida.disabled = true;

    selectParkMod.disabled = true;
    selectRegMod.disabled = true;

    btnModificarReserva.disabled = true;
    btnCacelarModReserva.disabled = true;

    frmModificarReserva.reset();
}
function cancelarModificarActividades(){
    let botonSeleccionar = document.getElementById("btnSeleccionarActividades");
    let btnModificarActividades = document.getElementById("btnAceptarModificarActividades");
    let btnCacelarModActividades = document.getElementById("btnACancelarModificarActividades");
    let inputId = document.getElementById("txtIDModificarActividades");
    let inputNombre = document.getElementById("txtNombreActividadModifica");

    inputId.disabled = false;
    botonSeleccionar.disabled = false;
    btnModificarActividades.disabled = true;
    btnCacelarModActividades.disabled = true;
    inputNombre.disabled = true;

    frmModificaActividades.reset();
}
function  cancelarModificarProveedor(){
    let botonSeleccionar = document.getElementById("btnSelecionarProveedor");
    let btnModificarActividades = document.getElementById("btnModificarProveedor");
    let btnCacelarModActividades = document.getElementById("btnCancelarProveedor");

    let inputId = document.getElementById("txtCifModifica");
    let inputNombre = document.getElementById("txtNombreProveedorModifica");
    let inputTelefono = document.getElementById("txtTelefonoProveedorModifica");

    inputId.disabled = false;
    botonSeleccionar.disabled = false;

    inputNombre.disabled = true;
    inputTelefono.disabled = true;

    btnModificarActividades.disabled = true;
    btnCacelarModActividades.disabled = true;
    
    frmModificaProveedor.reset();
}


/*-------------MODIFICAR-------------*/

function aceptarModificarCliente(){
    let sMensaje="";
    // Recoger valores del formulario
    let sDni = frmModificarCliente.txtNifModificar.value.trim();
    let sNombre = frmModificarCliente.txtNombreClienteModificar.value.trim();
    let iTelefono = parseInt(frmModificarCliente.txtTelefonoClienteModificar.value.trim());
    let sDireccion = frmModificarCliente.txtDireccionModificar.value.trim();
    let sEmail = frmModificarCliente.txtEmailModificar.value.trim();
    let iNumTarjeta = parseInt(frmModificarCliente.txtNTarjetaModificar.value.trim());

    if(!/^\d{8}[a-zA-Z]$/.test(sDni)){
        sMensaje+="El campo DNI esta mal\n";
        frmModificarCliente.txtNifModificar.classList.add("error");
    }
    else{
        frmModificarCliente.txtNifModificar.classList.remove("error");  
    }

    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmModificarCliente.txtNombreClienteModificar.classList.add("error");
    }
    else{
        frmModificarCliente.txtNombreClienteModificar.classList.remove("error");  
    }


    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmModificarCliente.txtTelefonoClienteModificar.classList.add("error");
    }
    else{
        frmModificarCliente.txtTelefonoClienteModificar.classList.remove("error");  
    }
    
    if(!/[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)*/.test(sDireccion)){
        sMensaje+="El campo direccion esta mal\n";
        frmModificarCliente.txtDireccionModificar.classList.add("error");
    }
    else{
        frmModificarCliente.txtDireccionModificar.classList.remove("error");  
    }

    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(sEmail)){
        sMensaje+="El campo email esta mal\n";
        frmModificarCliente.txtEmailModificar.classList.add("error");
    }
    else{
        frmModificarCliente.txtEmailModificar.classList.remove("error");  
    }
    if(!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/.test(iNumTarjeta)){
        sMensaje+="El campo del numero de la tarjeta esta mal(recuerde que son 16 numeros y que empieza por 4)\n";
        frmModificarCliente.txtNTarjetaModificar.classList.add("error");
    }
    else{
        frmModificarCliente.txtNTarjetaModificar.classList.remove("error");  
    }

    if(sMensaje==""){
    // Creamos el objeto cliente
    let oCliente = new Cliente(sDni, sNombre, iTelefono, sDireccion, sEmail, iNumTarjeta);

    // Alta de cliente en UPOCAMPO
    let sMensaje = oUPOCampo.modificarCliente(oCliente);
    alert(sMensaje);    
    cancelarModificarCliente();
    }
    else{
        alert(sMensaje);
    }



}

function aceptarModificarReserva(){
    // Recoger valores del formulario
    let sMensaje = "";
    let iID = parseInt(frmModificarReserva.txtIdModificar.value.trim());
    let iNumPersonas = parseInt(frmModificarReserva.txtNumModificar.value.trim());
    let dCheckin = frmModificarReserva.txtEntradaModificar.value.trim();
    let dCheckout = frmModificarReserva.txtSalidaModificar.value.trim();
    let fPrecio = 0;
    let iNumHabitacion = parseInt(frmAltaReserva.selectListaHab.value.trim());


    if(!/^\d+$/.test(iID)){
        sMensaje+="El campo ID esta mal. El campo ID debe ser un numero\n";
        frmModificarReserva.txtIdModificar.classList.add("error");
    }
    else{
        frmModificarReserva.txtIdModificar.classList.remove("error");  
    }
    if(!/^\d+$/.test(iNumPersonas)){
        sMensaje+="El campo numero de personas esta mal\n";
        frmModificarReserva.txtNumModificar.classList.add("error");
    }
    else{
        frmModificarReserva.txtNumModificar.classList.remove("error");  
    }
    

    if(sMensaje==""){
    // Creamos el objeto reserva
    let oReserva = new Reservas(iID, iNumPersonas, dCheckin, dCheckout, fPrecio, iNumHabitacion);
    // Alta de reserva en UPOCAMPO
     sMensaje = oUPOCampo.modificarReserva(oReserva);
    cancelarModificarReserva();
    }
    else{
        alert(sMensaje);
    }

}
function aceptarModificarActividad(){
    let sMensaje="";

    // Recoger valores del formulario
    let iID = frmModificaActividades.txtIDModificarActividades.value.trim();
    let sNombre = frmModificaActividades.txtNombreActividadModifica.value.trim();

    if(!/^\d+$/.test(iID)){
        sMensaje+="El campo ID esta mal. El campo ID debe ser un numero\n";
        frmModificaActividades.txtIDModificarActividades.classList.add("error");
    }
    else{
        frmModificaActividades.txtIDModificarActividades.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmModificaActividades.txtNombreActividadModifica.classList.add("error");
    }
    else{
        frmModificaActividades.txtNombreActividadModifica.classList.remove("error");  
    }

    if(sMensaje==""){
       // Creamos el objeto proveedor
       let oActividad = new Actividades(iID, sNombre, fPrecio);

       // Alta de proveedor en UPOCAMPO
       let sMensaje = oUPOCampo.modificaActividades(oActividad);
       alert(sMensaje);
       cancelarModificarActividades();
        }
    else{
        alert(sMensaje);
    }
}

function aceptarModificarProveedor(){

    let sMensaje="";

    // Recoger valores del formulario
    let sCIF = frmModificaProveedor.txtCifModifica.value.trim();
    let sNombre = frmModificaProveedor.txtNombreProveedorModifica.value.trim();
    let iTelefono = parseInt(frmModificaProveedor.txtTelefonoProveedorModifica.value.trim());

    if(!/^\d{8}[a-zA-Z]$/.test(sCIF)){
        sMensaje+="El campo CIF esta mal.\n";
        frmModificaProveedor.txtCifModifica.classList.add("error");
    }
    else{
        frmModificaProveedor.txtCifModifica.classList.remove("error");  
    }
    if(!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(sNombre)){
        sMensaje+="El campo nombre esta mal\n";
        frmModificaProveedor.txtNombreProveedorModifica.classList.add("error");
    }
    else{
        frmModificaProveedor.txtNombreProveedorModifica.classList.remove("error");  
    }
    if(!/^(\+34|0034|34)?[6|7|9][0-9]{8}$/g.test(iTelefono)){
        sMensaje+="El campo telefono esta mal (Recuerde poner el prefijo )\n";
        frmModificaProveedor.txtTelefonoProveedorModifica.classList.add("error");
    }
    else{
        frmModificaProveedor.txtTelefonoProveedorModifica.classList.remove("error");  
    }


    if(sMensaje==""){
       // Creamos el objeto proveedor
       let oProveedor = new Proveedores(sCIF, sNombre, iTelefono);

       // Alta de proveedor en UPOCAMPO
       let sMensaje = oUPOCampo.modificaProveedor(oProveedor);
       alert(sMensaje);
       cancelarModificarProveedor();
  
    }
    else{
        alert(sMensaje);
    }

}

/*-------------LISTADOS-------------*/


function listadosHabitaciones(){
    let pestana=window.open()
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    let arrayHabitaciones=oUPOCampo.getArrayHabitaciones();

    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de habitacion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Tipo";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Ocupacion Maxima";

    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

    for(let i=0; i<arrayHabitaciones.length; i++){
        let oFila = oTBody.insertRow(-1);

        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayHabitaciones[i].id;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayHabitaciones[i].tipo;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayHabitaciones[i].precio;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayHabitaciones[i].ocupacionMaxima;
    }

    pestana.document.body.append(oTabla);
}

function listadosParking(){
    let pestana=window.open()
    let arrayParking=oUPOCampo.getArrayParking();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de parking";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="precio";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Ancho especial";
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<arrayParking.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayParking[i].id;
    
         oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayParking[i].precio;
        
         oCelda = oFila.insertCell(-1);
        if(arrayParking[i].anchoespecial==false){
            oCelda.textContent = "No";
        }
        else{
            oCelda.textContent = "Si";
   
        }
    }
    
    pestana.document.body.append(oTabla);  
}
function listadosClientes(){
    let pestana=window.open()
    let arrayClientes=oUPOCampo.getArrayClientes();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tablais
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="NIF";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Telefono";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Direccion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Email";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de Tarjeta";
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<arrayClientes.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayClientes[i].nif;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayClientes[i].nombre;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayClientes[i].telefono;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayClientes[i].direccion;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayClientes[i].email;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayClientes[i].numeroTarjeta;
        
    }
    
    pestana.document.body.append(oTabla); 
}

function listadosProveedores(){
    let pestana=window.open()
    let arrayProveedor=oUPOCampo.getArrayProveedor();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="CIF";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Telefono";
    
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<arrayProveedor.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayProveedor[i].cif;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayProveedor[i].nombre;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayProveedor[i].telefono;
        
    }
    
    pestana.document.body.append(oTabla);
}
function listadosActividades(){
    let pestana=window.open()
    let arrayActividades=oUPOCampo.getArrayActividades();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";
    
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<arrayActividades.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayActividades[i].id;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayActividades[i].nombre;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayActividades[i].precio;
        
    }
    
    pestana.document.body.append(oTabla);
}
function listadosReservas(){
    let pestana=window.open()
    let arrayReservas=oUPOCampo.getArrayReservas();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de Personas";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Salida";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de habitacion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="NIF Cliente";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Parking";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Actividad";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Regimen";

    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<arrayReservas.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].id;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].numPersonas;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].checkin;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].checkout;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].precio;
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].numHabitaciones;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = arrayReservas[i].nifCliente;

        oCelda = oFila.insertCell(-1);
        if (arrayReservas[i].parkingID == 0) {
            oCelda.textContent = "NO";
        }
        else {
            oCelda.textContent = arrayReservas[i].parkingID;
        }

        oCelda = oFila.insertCell(-1);
        if (arrayReservas[i].actividadID == 0) {
            oCelda.textContent = "NO";
        }
        else {
            oCelda.textContent = arrayReservas[i].actividadID;
        }

        oCelda = oFila.insertCell(-1);
        if (arrayReservas[i].regimenID == "Nada") {
            oCelda.textContent = "NO";
        }
        else {
            oCelda.textContent = arrayReservas[i].regimenID;
        }
    }
    
    pestana.document.body.append(oTabla);
}

/*----------------LISTADOS POR FILTRO----------------*/

function aceptarListadoCliRes() {
	let dEntrada = frmListadoCliResFecha.txtEntradaCliRes.value.trim();
	let dSalida = frmListadoCliResFecha.txtSalidaCliRes.value.trim();
	let pestana=window.open();
	let aClientes = oUPOCampo.listadoClientePorFecha(dEntrada, dSalida);
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	//Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tablais
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="NIF";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Telefono";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Direccion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Email";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de Tarjeta";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Dia de entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Dia de salida";
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<aClientes.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].nif;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].nombre;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].telefono;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].direccion;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].email;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].numeroTarjeta;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].checkin;
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aClientes[i].checkout;
    }
    
    pestana.document.body.append(oTabla);
    frmListadoCliResFecha.reset();
}

function aceptarListadoResFecha() {
	let dEntrada = frmListadoResFecha.txtEntradaResFecha.value.trim();
	let dSalida = frmListadoResFecha.txtSalidaResFecha.value.trim();
	let pestana=window.open();
	let aReservas = oUPOCampo.listadoReservaPorFecha(dEntrada, dSalida);
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	//Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de Personas";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Salida";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de habitacion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="NIF Cliente";
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<aReservas.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].id;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].numPersonas;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].checkin;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].checkout;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].precio;
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].numHabitaciones;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aReservas[i].nifCliente;
    }

    pestana.document.body.append(oTabla);
    frmListadoResFecha.reset();
}

function aceptarListadoHabDispFecha() {
	let dEntrada = frmListadoHabDispFecha.txtEntradaHabDispFecha.value.trim();
	let dSalida = frmListadoHabDispFecha.txtSalidaHabDispFecha.value.trim();
	let pestana=window.open();
	let aHabitaciones = oUPOCampo.listadoHabDispPorFecha(dEntrada, dSalida);
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
	//Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de habitacion";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Tipo";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Ocupacion Maxima";

    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

    for(let i=0; i<aHabitaciones.length; i++){
        let oFila = oTBody.insertRow(-1);

        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aHabitaciones[i].id;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aHabitaciones[i].tipo;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aHabitaciones[i].precio;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aHabitaciones[i].ocupacionMaxima;
    }

    pestana.document.body.append(oTabla);
    frmListadoHabDispFecha.reset();
}

function aceptarListadoParkDispFecha() {
    let dEntrada = frmListadoParkDispFecha.txtEntradaParkDispFecha.value.trim();
    let dSalida = frmListadoParkDispFecha.txtSalidaParkDispFecha.value.trim();
    let pestana=window.open();
    let aParking = oUPOCampo.listadoParkDispPorFecha(dEntrada, dSalida);
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de parking";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="precio";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Ancho especial";
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<aParking.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aParking[i].id;
    
         oCelda = oFila.insertCell(-1);
        oCelda.textContent = aParking[i].precio;
        
         oCelda = oFila.insertCell(-1);
        if(aParking[i].anchoespecial==false){
            oCelda.textContent = "No";
        }
        else{
            oCelda.textContent = "Si";
   
        }
    }
    
    pestana.document.body.append(oTabla);
    frmListadoParkDispFecha.reset();
}

//---------------LISTADO POR RESERVAS---------------

function mostrarListadoParkRes(){
    let pestana=window.open()
    let aPark=oUPOCampo.listadoReservaParking();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>"); 
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de parking";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID de Reserva";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Fecha de entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Fecha de salida";
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<aPark.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aPark[i].id;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aPark[i].resID;
        
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aPark[i].checkin;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aPark[i].checkout;
    }

    pestana.document.body.append(oTabla);
}

function mostrarListadoRegRes() {
    let pestana=window.open();
    let aRegimen = oUPOCampo.listadoReservaRegimenA();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio por persona";

    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);

    for(let i=0; i<aRegimen.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aRegimen[i].id;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aRegimen[i].precioPersona;
        
    }

    pestana.document.body.append(oTabla);
}

function mostrarListadoActRes() {
    let pestana=window.open()
    let aActividades=oUPOCampo.listadoReservaActividades();
    pestana.document.write("<html><head><link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></head></html>");
    //Creacion de la tabla
    let oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    oTabla.classList.add("table","table-striped","table-dark");
    //El encabezado de la tabla
    let oTHead=oTabla.createTHead();
    let oFila=oTHead.insertRow(-1);
    let oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Nombre";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";
    
    
    //El cuerpo de la tabla
    let oTBody = document.createElement("TBODY");
    oTabla.appendChild(oTBody);
    
    for(let i=0; i<aActividades.length; i++){
        let oFila = oTBody.insertRow(-1);
    
        let oCelda = oFila.insertCell(-1);
        oCelda.textContent = aActividades[i].id;
    
        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aActividades[i].nombre;

        oCelda = oFila.insertCell(-1);
        oCelda.textContent = aActividades[i].precio;
        
    }
    
    pestana.document.body.append(oTabla);
}

//Mostrar Formularios

//Mostrar formulario cliente(anadir los otros formularios mientras los vais creando)
function mostrarAltaCliente() {
    esconderTodosLosFormularios();
    frmAltaCliente.style.display = "block";
}

function mostrarAltaReserva() {
    esconderTodosLosFormularios();
	frmAltaReserva.style.display = "block";
    mostrarHabitaciones(selectParkLista);
    habDesParking();
    habDesActividad();
    mostrarRegimenes(selectRegAlta);
}

function mostrarAltaProveedor() {
    esconderTodosLosFormularios();
	frmAltaProveedor.style.display = "block";
}

function mostrarBajaCliente() {
    esconderTodosLosFormularios();
	frmBajaCliente.style.display = "block";
}

function mostrarBajaReserva() {
    esconderTodosLosFormularios();
	frmBajaReserva.style.display = "block";
}
function mostrarBajaActividad(){
    esconderTodosLosFormularios();
    frmBajaActividad.style.display = "block";
}
function mostrarBajaProveedor(){
    esconderTodosLosFormularios();
    frmBajaProveedores.style.display="block";
}

function mostrarModificarCliente() {
    esconderTodosLosFormularios();
	frmModificarCliente.style.display = "block";
}

function mostrarModificarReserva() {
    esconderTodosLosFormularios();
	frmModificarReserva.style.display = "block";
    mostrarHabitaciones(selectParkMod);
    mostrarRegimenes(selectRegMod);
}
function mostrarModificarActividad(){
    esconderTodosLosFormularios();
    frmModificaActividades.style.display = "block";
}
function mostrarModificarProveedor(){
    esconderTodosLosFormularios();
    frmModificaProveedor.style.display="block";
}
function mostrarAltaActividad(){
    esconderTodosLosFormularios();
    frmAltaActividades.style.display = "block";  
}

function mostrarListadoCliRes(){
	esconderTodosLosFormularios();
	frmListadoCliResFecha.style.display = "block";
}

function mostrarListadoRes(){
	esconderTodosLosFormularios();
	frmListadoResFecha.style.display = "block";
}

function mostrarListadoHabDisp() {
	esconderTodosLosFormularios();
	frmListadoHabDispFecha.style.display = "block";
}

function mostrarListadoParkDisp() {
    esconderTodosLosFormularios();
    frmListadoParkDispFecha.style.display = "block";
}

function esconderTodosLosFormularios(){
    frmAltaCliente.style.display = "none";
    frmAltaReserva.style.display = "none";
    frmAltaProveedor.style.display = "none";
    frmAltaActividades.style.display = "none";

    frmModificarCliente.style.display = "none"; 
    frmModificarReserva.style.display = "none";
    frmModificaActividades.style.display = "none";
    frmModificaProveedor.style.display="none";

    frmBajaCliente.style.display = "none";
    frmBajaReserva.style.display = "none";
    frmBajaActividad.style.display = "none";
    frmBajaProveedores.style.display="none";

    frmListadoCliResFecha.style.display = "none";
    frmListadoResFecha.style.display = "none";
    frmListadoHabDispFecha.style.display = "none";
    frmListadoParkDispFecha.style.display = "none";
}
//Datos prueba de habitaciones

function datosHabitaciones() {
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
}


//Datos pruebas Parking

function datosParking() {
    oUPOCampo.altaParking(new Parking(1, 25, true));
    oUPOCampo.altaParking(new Parking(2, 25, false));
    oUPOCampo.altaParking(new Parking(3, 25, true));
    oUPOCampo.altaParking(new Parking(4, 25, false));
    oUPOCampo.altaParking(new Parking(5, 25, true));
    oUPOCampo.altaParking(new Parking(6, 25, false));
    oUPOCampo.altaParking(new Parking(7, 25, true));
    oUPOCampo.altaParking(new Parking(8, 25, false));
    oUPOCampo.altaParking(new Parking(9, 25, true));
    oUPOCampo.altaParking(new Parking(10, 25, false));
    oUPOCampo.altaParking(new Parking(11, 25, true));
    oUPOCampo.altaParking(new Parking(12, 25, false));
    oUPOCampo.altaParking(new Parking(13, 25, true));
    oUPOCampo.altaParking(new Parking(14, 25, false));
    oUPOCampo.altaParking(new Parking(15, 25, true));
    oUPOCampo.altaParking(new Parking(16, 25, false));
    oUPOCampo.altaParking(new Parking(17, 25, true));
    oUPOCampo.altaParking(new Parking(18, 25, false));
    oUPOCampo.altaParking(new Parking(19, 25, true));
    oUPOCampo.altaParking(new Parking(20, 25, true));
}


//Datos pruebas Reguime alimenticio

function datosRegimen() {
    oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio('Nada', 0));
    oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio('Solo Desayuno', 8.99));
    oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio('Media Pensión', 22.50));
    oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio('Pensión Completa', 35.75));
    oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio('Todo Incluido', 60));
}



//Datos pruebas clientes

function datosCliente() {
    oUPOCampo.altaCliente(new Cliente("25518526A", "Sofia", 34652753182, "Plaza roma s/n 13 2C", "sofialadivina@gmail.com", 4125825674593258));
    oUPOCampo.altaCliente(new Cliente("30452198R", "Pedro", 34625635851, "Calle paraiso n5", "pedroelcrak@gmail.com  ", 4348521495426582));
    oUPOCampo.altaCliente(new Cliente("51483972H", "Raul ", 34785215953, "Av montequinto n5 ", "raulinformatico@gmail.com", 4654853696265553));
    oUPOCampo.altaCliente(new Cliente("25584568J", "Sara ", 34652983541, "plaza de parma 19 4A", "sara089@gmail.com", 4253852495328512));
    oUPOCampo.altaCliente(new Cliente("28569535T", "Paula", 34685257548, "Avenida alegria n3", "paula1999@hotmail.es",4582468528569514));
    oUPOCampo.altaCliente(new Cliente("85216328G", "Javier", 34655329357, "Plaza la nueva n5", "xavierfotografo@gmail.com", 4265582695478582));
    oUPOCampo.altaCliente(new Cliente("44855685D", "Rocio", 34685248263, "Av europa 5 3D", "rociobestfriends@gmail.com", 4885963258452658));
    oUPOCampo.altaCliente(new Cliente("54664665A", "Manuel", 34685695247, "Av portimao n 12", "manoloeldelbombo@hotmail.es",4859632458215236));
    oUPOCampo.altaCliente(new Cliente("68546545G", "Amparo", 34758265925, "Calle la esperanza n 9", "amparo1993@gmail.com", 4782695321584582));
    oUPOCampo.altaCliente(new Cliente("98866866S", "Lucia", 34658951235, "Plaza de parma 21 3B", "luciabogados@gmail.com", 4859652148536258));
}

//Datos pruebas actividades

function datosActividad() {
	oUPOCampo.altaActividad(new Actividades(1, "Piragüismo", 45.20));
	oUPOCampo.altaActividad(new Actividades(2, "Alpinismo", 55.50));
	oUPOCampo.altaActividad(new Actividades(3, "Tenis", 7.50));
	oUPOCampo.altaActividad(new Actividades(4, "Futbol", 4.20));
	oUPOCampo.altaActividad(new Actividades(5, "Buceo", 12.50));
	oUPOCampo.altaActividad(new Actividades(6, "Buceo con bombona", 45.20));
	oUPOCampo.altaActividad(new Actividades(7, "Tiro con arco", 19.95));
	oUPOCampo.altaActividad(new Actividades(8, "Baloncesto", 8.50));
	oUPOCampo.altaActividad(new Actividades(9, "Exploracion de cuevas", 50));
	oUPOCampo.altaActividad(new Actividades(10, "Juegos infantiles", 2.50));
	oUPOCampo.altaActividad(new Actividades(11, "Bingo", 0));
	oUPOCampo.altaActividad(new Actividades(12, "Rafting", 65.50));
}

//Datos proveedor

function datosProveedor() {
	oUPOCampo.altaProveedor(new Proveedores("25852563D", "Victor", 34758962534));
	oUPOCampo.altaProveedor(new Proveedores("59354285G", "Laura", 34658952574));
	oUPOCampo.altaProveedor(new Proveedores("52928526D", "Rodrigo", 34685127963));
	oUPOCampo.altaProveedor(new Proveedores("45826584T", "Pepe", 34652895123));
	oUPOCampo.altaProveedor(new Proveedores("58102605U", "Paula", 34658215985));
}

//Datos reservas

function datosReservas()
{
    oUPOCampo.altaReserva(new Reservas(1234, 3, "2020-01-20", "2020-02-10", 25.80, 1, "25518526A", 3, "Alpinismo, Bingo", "Pensión Completa"));
    oUPOCampo.altaReserva(new Reservas(4321, 1, "2020-02-10", "2020-02-14", 90.45, 6, "30452198R", 4, "Tenis", "Todo Incluido"));
    oUPOCampo.altaReserva(new Reservas(1111, 2, "2020-02-12", "2020-02-16", 45.45, 12, "51483972H", 7, "Exploracion de cuevas, Bingo", "Media Pensión"));
    oUPOCampo.altaReserva(new Reservas(5656, 1, "2020-01-30", "2020-02-01", 12.80, 4, "25584568J", "NO", "Bingo", "Nada"));
    oUPOCampo.altaReserva(new Reservas(9832, 4, "2020-02-15", "2020-02-26", 63.25, 13, "28569535T", 15, "Tiro con arco, Baloncesto", "Pensión Completa"));
    oUPOCampo.altaReserva(new Reservas(5234, 1, "2020-02-01", "2020-02-03", 77.30, 8, "85216328G", "NO", "Alpinismo", "Solo Desayuno"));
    oUPOCampo.altaReserva(new Reservas(5555, 2, "2020-03-03", "2020-03-06", 65.20, 15, "44855685D", 8, "Buceo con bombona, Baloncesto", "Media Pensión"));
}
