let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* Ex 1

// for( let index = 0; index < numbers.length; index++){

//     console.log(numbers[index]);
// }

// Ex 2

// let soma = 0;
// for( let index = 0; index < numbers.length; index++){

//     soma += numbers[index]; 
// }

console.log(soma);

// Ex 3 

let soma = 0;
for( let index = 0; index < numbers.length; index++){

    soma += numbers[index]; 
}

console.log(soma / numbers.length);

// Ex 4 

let soma = 0;
for( let index = 0; index < numbers.length; index++){

    soma += numbers[index]; 
}

let media = soma / numbers.length;

if(media > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor que 20");
}

// Ex 5 

let maior = 0;

for( let index = 0; index < numbers.length; index++){

     if(numbers[index] > maior){
         maior = numbers[index];
     }
}

console.log(maior);

// Ex 6*/
let impar = [];
for( let index = 0; index < numbers.length; index++){

    if(numbers[index] % 2 != 0){
        impar.push(numbers[index]);
    }
}

if(impar == null){
    console.log("Nenhum valor impar encontrado");
}else{
    console.log(impar);
}



