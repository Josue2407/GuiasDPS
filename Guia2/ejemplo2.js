var full_nombre = "Jorge Cano";
var age = 27;
var developer = true;
var skills = ['JavaScript', 'TypeScript', 'Angular'];
var numberArray = [123, 123, 1213, 1231];
var variableExterna = "Uriel";
function Nombre(name) {
    this.variableExterna = name;
    return "Hola " + name;
}
console.log("Hola " + variableExterna);
var a = "Uriel";
var b = "Saludos a ti " + this.a;
console.log(b);
