class Rombo{
    diagonalVertical:number;
    diagonalHorizontal:number;
    constructor(_diagonalVertical:number,_diagonalHorizontal:number){
        this.diagonalVertical = _diagonalVertical;
        this.diagonalHorizontal = _diagonalHorizontal;
        
    }
}

let InstanciaRombo = new Rombo(12,4);

let horizontal = InstanciaRombo.diagonalHorizontal;
let vertical = InstanciaRombo.diagonalVertical;



function area(diagonalV:number,diagonalH:number):number{
    var calculo:number;
    calculo = diagonalV * diagonalH;
    return calculo;
}

let mostrar = area(vertical,horizontal);

console.log("Diagonal vertical: " + vertical);
console.log("Diagonal horizontal: " + horizontal);
console.log("Area: " + mostrar);