let num1 = prompt("Ingresa un numero: ");
let nume1=parseFloat(num1);
if (isNaN(nume1)){
    console.log("El dato ingresado no es un numero");
}else{
if (num1%2==0){
    console.log("El numero es par")
}else{
    console.log("El numero es impar")
}
}
