class Empleado{
    nombre:string;
    salario:number;
    constructor(_nombre:string,_salario:number){
        this.nombre = _nombre;
        this.salario = _salario;
        
    }
}

let InstanciaEmpleado = new Empleado("Juan",400);

let Nombre = InstanciaEmpleado.nombre;
let Sueldo = InstanciaEmpleado.salario;



function SueldoNeto(Sueldo:number):number{
    var calculo:number;
    var AFP:number;
    var ISSS:number;
    AFP = Sueldo * 0.0725;
    ISSS = Sueldo * 0.03;
    calculo = Sueldo -(AFP + ISSS);
    return calculo;
}

let mostrar = SueldoNeto(Sueldo);

console.log("Nombre del empleado: " + Nombre);
console.log("Sueldo bruto: " + Sueldo);
console.log("Sueldo neto: " + mostrar);