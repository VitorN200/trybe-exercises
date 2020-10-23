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

let nome = "peao";

switch(nome){

    case "peao":
        console.log("uma casa para frente");
        break;
    case "torre":
        console.log("anda em vertical e horizontal");
        break;
    case "cavalo":
        console.log("anda em L");
        break;
    case "bispo":
        console.log("anda em diagonal");
        break;
    case "rainha":
        console.log("anda em todas as direcoes");
        break;
    case "rei":
        console.log("uma casa em verticval e horizontal");
        break;
    default:
        console.log("error");
}