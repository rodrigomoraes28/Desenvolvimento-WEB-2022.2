import React from "react";

const IMC = (props) => {
  const { altura, peso } = props;
  const imc = calcularIMC();
  function calcularIMC() {
    return peso / (altura * altura);
  }

  function resultado() {
    if (imc < 17) {
      return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.49) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
      return "Peso normal";
    } else if (imc >= 25 && imc <= 29.99) {
      return "Acima do Peso";
    } else if (imc >= 30 && imc <= 34.99) {
      return "Obesidade I";
    } else if (imc >= 35 && imc <= 39.99) {
      return "Obesidade II (severa)";
    } else {
      return "Obesidade III (mórbida)";
    }
  }

  return (
    <div>
      <h1>Para uma pessoa de peso {peso} e altura {altura} seu IMC é{" "}
      {imc.toFixed(2)}
      </h1>
      <h1>E seu estado de {resultado()}</h1>
    </div>
  );
};
export default IMC;
//retornar o jsx com o valor do imc
