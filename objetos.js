"use strict";

//Clase Cliente
function Cliente(sNIF, sNombre, iTelefono, sDireccion, sEmail, iNumTarjeta) {
    this.nif = sNIF;
    this.nombre = sNombre;
    this.telefono = iTelefono;
    this.direccion = sDireccion;
    this.email = sEmail;
    this.numeroTarjeta = iNumTarjeta;
}
Cliente.prototype.toString = function() {
    let sMensaje = "El cliente " +this.nombre+" con DNI " +this.nif+ " y telefono " +this.telefono+" con la direccion "+this.direccion+" y email "+this.email+" y con un numero de tarjeta "+this.numeroTarjeta;
    return sMensaje;
}

//Clase Habitacion
function Habitacion(iID, sTipo, fPrecio, iOcupacionMax) {
    this.id = iID;
    this.tipo= sTipo;
    this.precio = fPrecio;
    this.ocupacionMaxima = iOcupacionMax;
}
Habitacion.prototype.toString = function() {
    let sMensaje = "La habitacion " +this.id+ " del tipo " +this.tipo+" con un precio de " +this.precio+ " y una ocupacion maxima de " +this.ocupacionMaxima;
    return sMensaje;
}

//Clase Parking
function Parking(iID, fPrecio, bAnchoEspecial) {
    this.id = iID;
    this.precio = fPrecio;
    this.anchoespecial = bAnchoEspecial;
}
Parking.prototype.toString = function() {
    if(this.anchoespecial==true){
        let sMensaje = "El parking " +this.id+ " con un precio de " +this.precio+ " y con ancho especial";
        return sMensaje;
    }
    else{
        let sMensaje = "El parking " +this.id+ " con un precio de " +this.precio+ " y sin ancho especial";
        return sMensaje;
    }
}

//Clase Regimen Alimenticio
function RegimenAlimenticio(iID, fPrecioPersona) {
    this.id = iID;
    this.precioPersona = fPrecioPersona;
}
RegimenAlimenticio.prototype.toString = function() {
    let sMensaje = "El regimen con  " +this.id+ " tiene un precio de " +this.precioPersona;
    return sMensaje;
}

//Clase Actividades
function Actividades(iID, sNombre, fPrecio) {
    this.id = iID;
    this.nombre= sNombre;
    this.precio = fPrecio;
}
Actividades.prototype.toString = function() {
    let sMensaje = "La actividad  " +this.nombre+ " con un ID" +this.id+" y con un precio de " +this.precio;
    return sMensaje;
}

//Clase Proveedores
function Proveedores(sCIF, sNombre, itelefono) {
    this.cif = sCIF;
    this.nombre= sNombre;
    this.telefono = itelefono;
}
Proveedores.prototype.toString = function() {
    let sMensaje = "El proveedor  " +this.nombre+ " con un CIF" +this.cif+" y su numero es " +this.telefono;
    return sMensaje;
}

//Clase Reservas
function Reservas(iID, iNumPersonas, dCheckIn, dCheckOut, fPrecio, iNumHabitaciones) {
    this.id = iID;
    this.numPersonas= iNumPersonas;
    this.checkin = dCheckIn;
    this.checkout = dCheckOut;
    this.precio = fPrecio;
    this.numHabitaciones = iNumHabitaciones;
}
Reservas.prototype.toString = function() {
    let sMensaje = "ID: "+this.id+" Numero personas: "+this.numPersonas+" CheckIn: "+this.checkin+" CheckOut: "+this.checkout+" Precio: "+this.precio;
    return sMensaje;
}
//Clase principal
class UpoCampo{

    constructor() 
    {
        this.clientes = [];
        this.reservas = [];
        this.habitaciones = [];
        this.parking = [];
        this.actividades = [];
        this.proveedores = [];
        this.regimenAlimentario = [];
    }

    altaCliente(oCliente) {
        let sMensaje = "";

        if (this.clientes.filter(cliente => cliente.nif == oCliente.nif).length == 0) {
            //No se encuentra --> lo doy de alta
            this.clientes.push(oCliente);
            sMensaje = "Alta cliente OK";
        }
        else {
            sMensaje = "El cliente ya estaba registrado";
        }

        return sMensaje;
    }

    altaReserva(oReserva){
        let sMensaje = "";

        if (this.reservas.filter(reserva => reserva.id == oReserva.id).length == 0) {
            //No se encuentra --> lo doy de alta
            this.reservas.push(oReserva);
            sMensaje = "Alta reserva OK";
        }
        else {
            sMensaje = "La reserva ya estaba registrada";
        }

        return sMensaje;
    }

    altaProveedor(oProveedor){
        let sMensaje = "";

        if (this.proveedores.filter(proveedor => proveedor.cif == oProveedor.cif).length == 0) {
            //No se encuentra --> lo doy de alta
            this.proveedores.push(oProveedor);
            sMensaje = "Alta proveedor OK";
        }
        else {
            sMensaje = "El proveedor ya estaba registrado";
        }

        return sMensaje;
    }
    altaActividad(oActividad){
        let sMensaje = "";

        if (this.actividades.filter(actividad => actividad.id == oActividad.id).length == 0) {
            //No se encuentra --> lo doy de alta
            this.actividades.push(oActividad);
            sMensaje = "Alta actividad OK";
        }
        else {
            sMensaje = "La actividad ya estaba registrada";
        }

        return sMensaje; 
    }

    altaHabitacion(oHabitacion){
      this.habitaciones.push(oHabitacion);
    }

    altaParking(oParking){
        this.parking.push(oParking);
    }

    altaRegimenAlimenticio(oRegimen){
        this.regimenAlimentario.push(oRegimen);
    }

    getArrayHabitaciones(){
        return this.habitaciones;
    }
getArrayHabitaciones(){
    let aHabitacion = [];

    for (let i = 0; i < this.habitaciones.length; i++) {
        aHabitacion.push(this.habitaciones[i]);
    }

    return aHabitacion;
}
getArrayParking(){
    return this.parking;
}
getArrayClientes(){
    return this.clientes;
}
getArrayProveedor(){
    return this.proveedores;
}
getArrayActividades(){
    return this.actividades;
}
getArrayReservas(){
    return this.reservas;
}


    bajaCliente(sNif){
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == sNif) {
                this.clientes.splice(i, 1);
                sMensaje = "Cliente borrado correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ningun cliente con ese NIF";
        }

        return sMensaje;
    }

    bajaReserva(iID) {
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].id == iID) {
                this.reservas.splice(i, 1);
                sMensaje = "Reserva borrada correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ninguna reserva con ese ID";
        }

        return sMensaje;
    }
    bajaActividad(iID){
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].id == iID) {
                this.actividades.splice(i, 1);
                sMensaje = "Actividad borrada correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ninguna actividad con ese ID";
        }
        return sMensaje;
    }
    bajaProveedor(iID){
        let sMensaje = "";
        let bEncontrado = false;

        for (let i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].cif == iID) {
                this.proveedores.splice(i, 1);
                sMensaje = "Proveedor borrado correctamente";
                bEncontrado = true;
            }
        }

        if (bEncontrado == false) {
            sMensaje = "No se encuentra ningun proveedor con ese CIF";
        }
        return sMensaje;  
    }

    modificarCliente(oCliente){
        let sMensaje = "";

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == oCliente.nif) {
                this.clientes[i].nombre = oCliente.nombre;
                this.clientes[i].telefono = oCliente.telefono;
                this.clientes[i].direccion = oCliente.direccion;
                this.clientes[i].email = oCliente.email;
                this.clientes[i].numeroTarjeta = oCliente.numeroTarjeta;

                sMensaje = "Cliente modificado correctamente";
            }
        }

        return sMensaje;
    }

    modificarReserva(oReserva){
        let sMensaje = "";

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].id == oReserva.id) {
                this.reservas[i].numPersonas = oReserva.numPersonas;
                this.reservas[i].checkin = oReserva.checkin;
                this.reservas[i].checkout = oReserva.checkout;
                this.reservas[i].precio = oReserva.precio;

                sMensaje = "Reserva modificada correctamente";
            }
        }

        return sMensaje;
    }

    buscarCliente(sNif){
        let aCliente = [];

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].nif == sNif) {
                aCliente.push(this.clientes[i]);
            }
        }

        return aCliente;
    }

    buscarReserva(iID){
        let aReserva = [];

        for (let i = 0; i < this.reservas.length; i++) {
            if (this.reservas[i].id == iID) {
                aReserva.push(this.reservas[i]);
            }
        }

        return aReserva;
    }
}
