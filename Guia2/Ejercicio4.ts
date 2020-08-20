class Calculadora{
    numero1:number;
    numero2:number;
    constructor(_numero1:number,_numero2:number){
        this.numero1 = _numero1;
        this.numero2 = _numero2;
        
    }
}

let InstanciaCalculadora = new Calculadora(10,6);

let N1 = InstanciaCalculadora.numero1;
let N2 = InstanciaCalculadora.numero2;

function Operaciones(N1:number,N2:number):void{
    var Suma:number;
    var Resta:number;
    var Multi:number;
    var Div:number;

    Suma = N1 + N2;
    Resta = N1 - N2;
    Multi = N1 * N2;
    Div = N1 / N2;
    console.log("Primer numero ingresado: " + N1);
    console.log("Segundo numero ingresado: " + N2);
    console.log("Suma: " + Suma);
    console.log("Resta: " + Resta);
    console.log("Multiplicacion: " + Multi);
    console.log("Division: " + Div);
}

Operaciones(N1,N2);
