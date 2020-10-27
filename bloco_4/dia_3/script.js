let n = 5;
let star = "*";
let linha = "";
let space = " ";

// for(let index = 0; index < n; index ++){
//     linha = linha + star;
// }

// for(let index = 0; index < n; index ++){
    
//     console.log(linha);
// }


// for(let index = 0; index < n; index ++){
//     linha = linha + star;
//     console.log(linha);
// }

for( let i = n; i > 0; i--){

    linha ="";
    for(let index = 1; index <= n; index ++){
        
        if(index < i){
            linha = linha + space;
        }else{
            linha = linha + star;
        }
        
    }
    console.log(linha);
}



