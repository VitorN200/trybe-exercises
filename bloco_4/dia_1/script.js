// let a = 2; 
// let b = 3;  

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;  
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

// --------------------------------------

// let num1 = 15;
// let num2 = 20;
// let maior;

// if(num1 > num2){
    
// }else{
//     maior = num2;
// }

// console.log(maior);

// -------------------------------------------

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let maior;

// if(num1 > num2 && num1 > num3){
//     maior = num1;
// }else if(num2 > num1 && num2 > num3){
//     maior = num2;
// }else{
//     maior = num3;
// }

// console.log(maior);

// -------------------------------

// let num = 0;

// if( num > 0){
//     console.log("positive")
// }else if(num < 0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }

// -------------------------------

// let tri1 = 30;
// let tri2 = 60;
// let tri3 = 90;

// if (tri1 + tri2 + tri3 == 180){
//     console.log("true")
// }else{
//     console.log("false")
// }

// ---------------------------------------------

// let nome = "peao";

// switch(nome){

//     case "peao":
//         console.log("uma casa para frente");
//         break;
//     case "torre":
//         console.log("anda em vertical e horizontal");
//         break;
//     case "cavalo":
//         console.log("anda em L");
//         break;
//     case "bispo":
//         console.log("anda em diagonal");
//         break;
//     case "rainha":
//         console.log("anda em todas as direcoes");
//         break;
//     case "rei":
//         console.log("uma casa em verticval e horizontal");
//         break;
//     default:
//         console.log("error");
// }

// ------------------------------------------

// let nota = 70;

// if(nota >=90 && nota <=100){
//     console.log("A")
// }else if(nota >=80 && nota < 90){
//     console.log("B")
// }else if(nota >=70 && nota < 80){
//     console.log("C")
// }else if(nota >=60 && nota < 70){
//     console.log("D")
// }else if(nota >=50 && nota < 60){
//     console.log("E")
// }else if(nota < 50 && nota >= 0){
//     console.log("F")
// }else{
//     console.log("error")
// }

// -------------------------------------

// num1 = 1;
// num2 = 2;
// num3 = 3;

// if(num1 %2 == 0 || num2 %2 == 0 || num3 %2 == 0 ){
//     console.log(true);
// }else{
//     console.log(false);
// }

// ---------------------------------------------------------------

// num1 = 1;
// num2 = 2;
// num3 = 4;

// if(num1 %2 != 0 || num2 %2 != 0 || num3 %2 != 0 ){
//     console.log(true);
// }else{
//     console.log(false);
// }

// ----------------------------------------------------

// let custo = 10;
// let venda = 20;
// let imposto = custo*0.2;
// let custoTotal = custo + imposto;

// let lucro = venda - custoTotal;

// if(custo < 0 || venda < 0 || imposto < 0){
//     console.log("error");
// }else{
//     console.log(lucro)
// }

// ---------------------------------------

let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;

if(salarioBruto <= 1556.94){

    salarioBase = salarioBruto - (salarioBruto*0.08);

}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ){

    salarioBase = salarioBruto - (salarioBruto*0.09);

}else if(salarioBruto >= 2954.93 && salarioBruto <= 5189.82 ){

    salarioBase = salarioBruto - (salarioBruto*0.11);

}else{

    salarioBase = salarioBruto - 570.88;
}

if(salarioBase <= 1903.98){

    salarioLiquido = salarioBase;

}else if(salarioBase >= 1903.99 && salarioBase <= 2826.65 ){

    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);

}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05 ){

    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);

}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68 ){

    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);

}else{

    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}

console.log(salarioLiquido);