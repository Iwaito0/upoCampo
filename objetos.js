"use strict";
//Clase Cliente
function Cliente(sNIF, sNombre, sApellido, iTelefono) {
    this.nif = sNIF;
    this.nombre= sNombre;
    this.apellido = sApellido;
    this.telefono = iTelefono;
}
Cliente.prototype.toString = function() {
    let sMensaje = "El cliente " +this.nombre+ " " +this.apellido+" con DNI " +this.nif+ " y telefono " +this.telefono;
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
//Clase principal
class UpoCampo{

constructor() 
    {
        
    }

  

}
