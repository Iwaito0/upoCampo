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

//Clase principal
class UpoCampo{

constructor() 
    {
        
    }

  

}
