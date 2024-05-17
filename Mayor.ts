import * as rls from "readline-sync";

let num:number[]= new Array(12);
let mayor:number = 0;
let indice:number;

num[0] = 4;
num[1] = 7;
num[2] = 9;
num[3] = 3;
num[4] = 1;
num[5] = 45;
num[6] = 67;
num[7] = 23;
num[8] = 29;
num[9] = 78;
num[10] = 11;
num[11] = 16;

for(indice=0; indice<12; indice++){
    if(num[indice]>mayor){
        mayor = num[indice];
    }
}

if(par(mayor)){
    console.log(`El numero mas grande es ${mayor} y es par`);
}
else{
    console.log(`El numero mas grande es ${mayor} y es impar`);
}



function par(numero:number){
    return numero%2==0;
}

