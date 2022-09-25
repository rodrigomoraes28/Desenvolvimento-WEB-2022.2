/*
import "./App.css";
import OlaMundo from  "./components/OlaMundo"
import Estudante from "./components/Estudante"
//import {Vecna as V ,Eleven, Will} from "./components/StrangerThings"
import * as StrangerThings from "./components/StrangerThings"
import Calculadora from "./components/Calculadora";
import IMC from "./components/IMC";

function App() {
  return (
   <div className="App"> 
      <Estudante
      nome="Rodrigo"
      curso="Engenharia de Software"
      universidade="UFC Quixadá"
      />
      <StrangerThings.Vecna/>
      <Calculadora op="SOMA" x={10} y={20} />
      <IMC altura={1.8} peso={70}/>
   </div>
  );
}

export default App;
*/
/*
import Grupo from "./components/vingadores/Grupo";
import Heroi from "./components/vingadores/Heroi";

function App() {
  return (
    <div className="App">
      <Grupo titulo="Vingadores">
        <h1>titulo</h1>
        <Heroi nome="Capitão América" />
        <Heroi nome="Hulk" />
        <Heroi nome="Viúva Negra" />
        <Heroi nome="Homem de Ferro" />
        <h5>Fim do Time!</h5>
      </Grupo>
    </div>
  );
}
*/

import "./App.css";
//import OlaMundo from  "./components/OlaMundo"
//import {Vecna as V ,Eleven, Will} from "./components/StrangerThings"
//import * as StrangerThings from "./components/StrangerThings"
//import Calculadora from "./components/Calculadora";
//import IMC from "./components/IMC";
//import Estudante from "./universidade/Estudante";
//import Disciplina from "./universidade/Disciplina";
//import Pai from './components/paifilho/Pai'

//import Contador from "./components/estados/Contador";

import VotaCidades from "./components/estados/VotaCidades";

function App() {
  return (
    <div className="App">
      <VotaCidades />
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <Contador />
    </div>
  );
}


function App(){
  return(
    <div className="App">
      <Pai />
    </div>
  )
}


/*
function App() {
  return (
    <div className="App">
      <Disciplina titulo='Desenvolvimento Web'>
        <Estudante
          nome="Rodrigo"
          curso="Engenharia de Software"
          universidade="UFC Quixadá"
          // disciplina="Desenvolvimento Web"
        />
        <br />

        <Estudante
          nome="José Vitor"
          curso="Engenharia de Software"
          universidade="UFC Quixadá"
          // disciplina="Fundamento de Banco de Dados"
        />
        <br />

        <Estudante
          nome="Alex"
          curso="Engenharia de Software"
          universidade="UFC Quixadá"
          // disciplina="Empreededorismo"
        />
      </Disciplina>
    </div>
  );
}

*/
export default App;

//no lugar de heroi é estudante no lugar de grupo é disciplina
