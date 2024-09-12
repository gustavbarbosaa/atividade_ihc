function soma(a,b) {
  return a + b;
}

const res1 = soma(1, 2);
console.log(res1);

function subtracao(a,b) {
  return a - b;
}

const res2 = subtracao(1, 2);
console.log(res2);

function multiplicacao(a,b) {
  return a * b;
}

const res3 = multiplicacao(2, 2);
console.log(res3);

function divisao(a,b) {
  if (b === 0) {
    return "O valor não pode ser dividido por 0";
  }
  return a / b;
}

let res4 = divisao(4,2);
console.log(res4);

function ePar(a) {
  return a % 2 === 0
}

let res5 = ePar(10);
console.log(res5);

function somaIntervalo(a,b) {
  let soma = 0;
  for (let i = a; i <= b; i++) {
    soma += i;
  }

  return soma;
}

let res6 = somaIntervalo(1,10);
console.log(res6);

function fatorial(a) {
  let fatorial = 1;
  for (let i = 2; i <= a; i++) {
    fatorial *= i;
  }

  return fatorial;
}

let res7 = fatorial(5);
console.log(res7);

function contarVogais(palavra) {
  let contador = 0;

  palavra = palavra.toLowerCase();
  for (let letra of palavra) {

    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
      contador += 1;
    }
  }

  return contador;
}

const res8 = contarVogais("gustavo");
console.log(res8);


