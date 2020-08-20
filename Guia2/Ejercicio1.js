var Rombo = /** @class */ (function () {
    function Rombo(_diagonalVertical, _diagonalHorizontal) {
        this.diagonalVertical = _diagonalVertical;
        this.diagonalHorizontal = _diagonalHorizontal;
    }
    return Rombo;
}());
var InstanciaRombo = new Rombo(12, 4);
var horizontal = InstanciaRombo.diagonalHorizontal;
var vertical = InstanciaRombo.diagonalVertical;
function area(diagonalV, diagonalH) {
    var calculo;
    calculo = diagonalV * diagonalH;
    return calculo;
}
var mostrar = area(vertical, horizontal);
console.log("Diagonal vertical: " + vertical);
console.log("Diagonal horizontal: " + horizontal);
console.log("Area: " + mostrar);
