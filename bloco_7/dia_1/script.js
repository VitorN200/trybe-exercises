// const testingScope = (escopo) => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.
// oddsAndEvens.sort((a, b) => a - b);

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

const fatorial = (n) => {
  if (n == 0) {
    return 1;
  }
  var resp = n;
  while (n > 2) {
    resp *= --n;
  }
  return resp;
}

console.log(fatorial(5));