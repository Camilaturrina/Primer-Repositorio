import * as readlineSync from "readline-sync";

let base:number =readlineSync.question("Ingrese base: ");
let exponente:number = readlineSync.question("Ingrese exponente mayor o igual a 0: ")
let resultado:number = 0 

if (exponente >= 0) {
    resultado = calcularpotencia(base, exponente);
    console.log("El resultado es: " + resultado);
} 
else {
    console.log("El exponente debe ser mayor o igual a 0.");
}



function calcularpotencia(base:number, exponente:number): number{
     if(exponente==0){
        return 1;
    }
    else{
        let resultado = 1;
        for (let i=1; i<=exponente; i++){
            resultado *= base
        }
        return resultado;
    }
}






