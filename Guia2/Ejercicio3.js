var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
    }
    return Empleado;
}());
var InstanciaEmpleado = new Empleado("Juan", 400);
var Nombre = InstanciaEmpleado.nombre;
var Sueldo = InstanciaEmpleado.salario;
function SueldoNeto(Sueldo) {
    var calculo;
    var AFP;
    var ISSS;
    AFP = Sueldo * 0.0725;
    ISSS = Sueldo * 0.03;
    calculo = Sueldo - (AFP + ISSS);
    return calculo;
}
var mostrar = SueldoNeto(Sueldo);
console.log("Nombre del empleado: " + Nombre);
console.log("Sueldo bruto: " + Sueldo);
console.log("Sueldo neto: " + mostrar);
