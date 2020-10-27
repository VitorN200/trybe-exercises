let n = 27;
let star = "*";
let linha = "";
let space = " ";

// 1 ------------------------------------------------------------
// for(let index = 0; index < n; index ++){
//     linha = linha + star;
// }

// for(let index = 0; index < n; index ++){
    
//     console.log(linha);
// }

// 2 ---------------------------------------------------------
// for(let index = 0; index < n; index ++){
//     linha = linha + star;
//     console.log(linha);
// }

// 3 ----------------------------------------------------------
// for( let i = n; i > 0; i--){

//     linha ="";
//     for(let index = 1; index <= n; index ++){
        
//         if(index < i){
//             linha = linha + space;
//         }else{
//             linha = linha + star;
//         }
        
//     }
//     console.log(linha);
// }

// 4 --------------------------------------------------------------------
// if( n % 2 == 0){
//     console.log("Erro: numero par inserido");
// }else{

//     let div = n /2 ;
//     let arrendondadoBaixo = Math.floor(div);
//     let arrendondadoCima = Math.ceil(div);

//     for(let index = 1; index <= arrendondadoCima; index ++){
//         linha ="";
//         for(let i = 0; i < arrendondadoBaixo; i++){

//             linha = linha + space;
//         }
        
//         linha = linha + star;
        
//         for(let z = 1; z < index; z++){
//             linha = linha + star + star;
//         }

//         arrendondadoBaixo--;
//         console.log(linha);
//     }  
// }

if( n % 2 == 0){
    console.log("Erro: numero par inserido");
}else{

    let div = n /2 ;
    let arrendondadoBaixo = Math.floor(div);
    let arrendondadoCima = Math.ceil(div);

    for(let index = 1; index <= arrendondadoCima; index ++){
        linha ="";
        for(let i = 0; i < arrendondadoBaixo; i++){

            linha = linha + space;
        }
        
        linha = linha + star;
        
        if(index > 2 && index < arrendondadoCima){
            for(let z = 1; z < index; z++){
                if(z ==1){
                    linha = linha + space;
                }else{
                    linha = linha + space + space;
                }       
            }
            linha = linha + star;
        }else if(index == 2){
            linha = linha + space;
            linha = linha + star;
        }else if(index == arrendondadoCima){
            for(let y = 1; y < n; y++){
                linha = linha + star;
            }
        }

        arrendondadoBaixo--;
        console.log(linha);
    }  
}

