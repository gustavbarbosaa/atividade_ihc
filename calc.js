const primeiroValor = document.getElementById('primeiroValor');
const segundoValor = document.getElementById('segundoValor');
const resultado = document.getElementById('resultado');
let valorOperacao;
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const num1 = Number(primeiroValor.value);
  const num2 = Number(segundoValor.value);
  const select = document.getElementById('operacao');
  const op = select.options[select.selectedIndex].value;

  if (op === "soma") {
    valorOperacao = num1 + num2;
  } else if (op === "sub") {
    valorOperacao = num1 - num2;
  } else if (op === "div") {
    if (num2 == 0) {
      valorOperacao = "Não é possível dividir por zero.";
    }
    valorOperacao =  num1 / num2;
  } else {
    valorOperacao = num1 * num2;
  }

  resultado.innerText = valorOperacao;
})
