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

/*------------SELECCIONAR ELEMENTOS MODIFICAR------------*/

var seleccionarClienteModificar = document.getElementById("btnSeleccionarCliente");
seleccionarClienteModificar.addEventListener("click", seleccionarCliente, false);



/*---------------MENULISTADOS GENERALES--------------------*/
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






/*--------------------------CANCELAR--------------------------*/

var botonCancelarClienteMod = document.getElementById("btnCancelarModificarCliente");
botonCancelarClienteMod.addEventListener("click", cancelarModificarCliente, false);


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

function aceptarAltaReserva(){
    let sMensaje="";

    // Recoger valores del formulario
    let iID = parseInt(frmAltaReserva.txtIdAlta.value.trim());
    let iNumPersonas = parseInt(frmAltaReserva.txtNumAlta.value.trim());
    let dCheckin = frmAltaReserva.txtEntradaAlta.value.trim();
    let dCheckout = frmAltaReserva.txtSalidaAlta.value.trim();
    let fPrecio = parseFloat(frmAltaReserva.txtPrecioAlta.value.trim());


    if(!/^\d+$/.test(iID)){
        sMensaje+="El campo ID esta mal. El campo ID debe ser un numero\n";
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
    if(!/^[0-9]+([.][0-9]+)?$/.test(fPrecio)){
        sMensaje+="El campo precio esta mal (ten cuidado que el separador de decimales es el punto)\n";
        frmAltaReserva.txtPrecioAlta.classList.add("error");
    }
    else{
        frmAltaReserva.txtPrecioAlta.classList.remove("error");  
    }



    if(sMensaje==""){
    // Creamos el objeto reserva
    let oReserva = new Reservas(iID, iNumPersonas, dCheckin, dCheckout, fPrecio);
    // Alta de reserva en UPOCAMPO
    let sMensaje = oUPOCampo.altaReserva(oReserva);
    alert(sMensaje);    
    frmAltaReserva.reset();    
    }
    else{
        alert(sMensaje);
    }
    


    
    
}

function aceptarAltaProveedor(){
    let sMensaje="";

    // Recoger valores del formulario
    let sCIF = frmAltaProveedor.txtCifAlta.value.trim();
    let sNombre = frmAltaProveedor.txtNombreProveedorAlta.value.trim();
    let iTelefono = frmAltaProveedor.txtTelefonoProveedorAlta.value.trim();

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
    let fPrecio = parseFloat(frmAltaActividades.txtPrecioAltaActividades.value.trim());

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

/*-------------MODIFICAR-------------*/

function aceptarModificarCliente(){
    let sNif = frmModificarCliente.txtNifModificar.value.trim();
    let sNombre = frmModificarCliente.txtNombreClienteModificar.value.trim();
    let iTelefono = frmModificarCliente.txtTelefonoClienteModificar.value.trim();
    let sDireccion = frmModificarCliente.txtDireccionModificar.value.trim();
    let sEmail = frmModificarCliente.txtEmailModificar.value.trim();
    let iNumTarjeta = frmModificarCliente.txtNTarjetaModificar.value.trim();

    
}

function aceptarModificarReserva(){
	alert("mmmmm");
}

/*-------------LISTADOS-------------*/


function listadosHabitaciones(){
    let pestana=window.open()
    let arrayHabitaciones=oUPOCampo.getArrayHabitaciones();

    //Creacion de la tabla
    var oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    //El encabezado de la tabla
    var oTHead=oTabla.createTHead();
    var oFila=oTHead.insertRow(-1);
    var oCelda=oFila.insertCell(-1);
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
    
    //Creacion de la tabla
    var oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    //El encabezado de la tabla
    var oTHead=oTabla.createTHead();
    var oFila=oTHead.insertRow(-1);
    var oCelda=oFila.insertCell(-1);
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
    
    //Creacion de la tabla
    var oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    //El encabezado de la tablais
    var oTHead=oTabla.createTHead();
    var oFila=oTHead.insertRow(-1);
    var oCelda=oFila.insertCell(-1);
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
    
    //Creacion de la tabla
    var oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    //El encabezado de la tabla
    var oTHead=oTabla.createTHead();
    var oFila=oTHead.insertRow(-1);
    var oCelda=oFila.insertCell(-1);
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
    
    //Creacion de la tabla
    var oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    //El encabezado de la tabla
    var oTHead=oTabla.createTHead();
    var oFila=oTHead.insertRow(-1);
    var oCelda=oFila.insertCell(-1);
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
    
    //Creacion de la tabla
    var oTabla=document.createElement("TABLE");
    oTabla.setAttribute("border","1");
    //El encabezado de la tabla
    var oTHead=oTabla.createTHead();
    var oFila=oTHead.insertRow(-1);
    var oCelda=oFila.insertCell(-1);
    oCelda.textContent="ID";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Numero de Personas";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Entrada";

    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Salida";
    
    oCelda=oFila.insertCell(-1);
    oCelda.textContent="Precio";
    
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
        
        
    }
    
    pestana.document.body.append(oTabla);
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

//Datos pruebas Parking

oUPOCampo.altaParking(new Parking(0, 25, false));
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

//Datos pruebas Reguime alimenticio
oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio(0, 12.50));
oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio(1, 8.99));
oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio(2, 22.50));
oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio(3, 55.75));
oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio(4, 5));
oUPOCampo.altaRegimenAlimenticio(new RegimenAlimenticio(6, 25));

