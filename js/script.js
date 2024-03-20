function calcquad() {
  let base = parseFloat(
    prompt("Digite o valor da Base (a conta sera base x altura /2): ")
  );
  let altura = parseFloat(prompt("Digite o valor da altrua: "));

  let calculo = (base * altura) / 2;

  document.getElementById("resultpag2").innerHTML =
    "A Area do Triangulo é igual à: " + calculo;
}

function calcretangulo() {
  let base = parseFloat(
    prompt("Digite o valor da Base (a conta sera base x altura ): ")
  );
  let altura = parseFloat(prompt("Digite o valor da altrua: "));

  let calculo2 = base * altura;

  document.getElementById("resultpag2").innerHTML =
    "A area do Retangulo é: " + calculo2;
}

function calccirc() {
  let raio = parseFloat(
    prompt(
      "Digite o valor do raio a conta sera (valor de pi= 3.14 x (raio x raio)): "
    )
  );
  let pi = 3.14;

  calculo3 = pi * (raio * raio);

  document.getElementById("resultpag2").innerHTML =
    "A area do circulo é: " + calculo3;
}
