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
function Reservas(iID, iNumPersonas, dCheckIn, dCheckOut, fPrecio) {
    this.id = iID;
    this.numPersonas= iNumPersonas;
    this.checkin = dCheckIn;
    this.checkout = dCheckOut;
    this.precio = fPrecio;
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
  altaHabitacion(oHabitacion){
      this.habitaciones.push(oHabitacion);
  }
  altaParking(oParking){
    this.parking.push(oParking);
}
altaRegimenAlimenticio(oRegimen){
    this.regimenAlimentario.push(oRegimen);
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

  buscarCliente(sNif){
        
  }

}
