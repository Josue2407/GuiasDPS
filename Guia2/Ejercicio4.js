var Calculadora = /** @class */ (function () {
    function Calculadora(_numero1, _numero2) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }
    return Calculadora;
}());
var InstanciaCalculadora = new Calculadora(10, 6);
var N1 = InstanciaCalculadora.numero1;
var N2 = InstanciaCalculadora.numero2;
function Operaciones(N1, N2) {
    var Suma;
    var Resta;
    var Multi;
    var Div;
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
Operaciones(N1, N2);
