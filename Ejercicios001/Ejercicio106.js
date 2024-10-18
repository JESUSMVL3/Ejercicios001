let palabra= prompt("Escribe la palabra: ");
let reversa= palabra.split('').reverse().join('');

if (palabra==reversa){
    console.log("La palabra ingresada es un palindromo");
}else{
    console.log("La palabra no es un palindromo");
}