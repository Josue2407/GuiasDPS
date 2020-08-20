var full_nombre:string = "Jorge Cano";
var age:number = 27;
var developer:boolean = true;

var skills:Array<string> = ['JavaScript','TypeScript','Angular'];
var numberArray:number[] = [123,123,1213,1231];


var variableExterna:string = "Uriel";
function Nombre(name:string):string{
this.variableExterna = name;
return "Hola " + name;
}
console.log("Hola " + variableExterna);

var a:string = "Uriel";
var b =`Saludos a ti ${this.a}`;
console.log(b);

