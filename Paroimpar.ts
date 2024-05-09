import * as readlineSync from "readline-sync";    

let numero:number = readlineSync.question("Ingrese un numero: "); 

if (numero == 0){
    console.log("El numero ingresado es cero(0)");
}

else if(numero%2 == 0){
    console.log("El numero ingresado es par");
}

else {
    console.log("El numero ingresado es impar");
}