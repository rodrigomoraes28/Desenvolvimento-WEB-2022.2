import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(100);
  const [sena, setSena] = useState(false);
  // let contador = 0;

  const contar = () => {
    //  contador = contador + 1;
    // console.log(contador)
    setContador(contador + 1);
    //setContador = contador +1
  };

  const diminuir = () => {
    //  contador = contador + 1;
    // console.log(contador)
    setContador(contador - 1);
    //setContador = contador +1
  };

  const multiplicar = () => {
    //  contador = contador + 1;
    // console.log(contador)
    setContador(contador * 2);
    //setContador = contador +1
  };

  const divisao = () => {
    //  contador = contador + 1;
    // console.log(contador)
    setContador(contador / 2);
    //setContador = contador +1
  };

  const setarPraInicio = () => {
    //  contador = contador + 1;
    // console.log(contador)
    setContador(contador * 0);
    //setContador = contador +1
  };

  const modificarSena = () => {
    setSena(!sena);
  };

  const renderizarSena = () => {
    if (sena) {
      return (
        <img
          src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/David-Sena-Oliveira-Final1-240x320.png"
          alt="Italian Trulli"
        />
      );
    }
    return null;
  };

  return (
    <div>
      <h2>Contador {contador}</h2>
      <button onClick={contar}>Acrescentar</button>
      {/* <button onClick={diminuir}>Diminuir</button> */}
      {/* <button onClick={multiplicar}>Multiplicar por 2</button> */}
      {/* <button onClick={divisao}>Dividir por 2</button>
      <button onClick={setarPraInicio}>Zerar</button>
       */}
      <button onClick={modificarSena}>Sena</button>
      {renderizarSena()}
    </div>
  );
};

export default Contador;
