import { useState } from "react";

const VotaCidades = () => {
  const [contador_Quixada, setContador_Quixada] = useState(0);
  const [contador_Limoeiro_do_Norte, setContador_Limoeiro_do_Norte] =
    useState(0);
  const [contador_Cracateus, setContador_Cracateus] = useState(0);
  const [vencedor, setVencedor] = useState("");

  const contar_Quixada = () => {
    setContador_Quixada(contador_Quixada + 1);
  };
  const contar_Limoeiro_do_Norte = () => {
    setContador_Limoeiro_do_Norte(contador_Limoeiro_do_Norte + 1);
  };
  const contar_Cracateus = () => {
    setContador_Cracateus(contador_Cracateus + 1);
  };

  const getVencedor = () => {
    if (
      contador_Quixada > contador_Cracateus &&
      contador_Quixada > contador_Limoeiro_do_Norte
    ) {
      setVencedor("Quixáda");
    } else if (
      contador_Cracateus > contador_Quixada &&
      contador_Cracateus > contador_Limoeiro_do_Norte
    ) {
      setVencedor("Cracateus");
    } else if (
      contador_Limoeiro_do_Norte > contador_Quixada &&
      contador_Limoeiro_do_Norte > contador_Cracateus
    ) {
      setVencedor("Limoreiro do Norte");
    } else {
      setVencedor("empate");
    }
  };

  return (
    <div>
      <div>
        <h1></h1>
        <h2>Quixadá: {contador_Quixada} </h2>
        <h2>Limoeiro do Norte: {contador_Limoeiro_do_Norte} </h2>
        <h2>Cracateús: {contador_Cracateus} </h2>
      </div>
      <div>
        <button onClick={contar_Quixada}>Votar Quixadá</button>
        <button onClick={contar_Limoeiro_do_Norte}>
          {" "}
          Votar Limoeiro do Norte
        </button>
        <button onClick={contar_Cracateus}> Votar Cracateús</button>
      </div>
      <div>
        <button onClick={getVencedor}> Veja o Vencedor </button>
        {vencedor !== "" ? <h3> Resultado: {vencedor} é o vencedor</h3> : <span></span>}
      </div>
    </div>
  );
};

export default VotaCidades;
