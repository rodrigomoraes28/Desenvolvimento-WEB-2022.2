import React, {useState, useEffect} from 'react';
import './App.css';
import Questao01 from './components/questao1/Questao01'
import Questao02 from './components/questao2/Questao02'
import Questao03 from './components/questao3/Questao03'
import Questao04 from './components/questao4/Questao04'
  
function App(){ 
  const disp = ["PI", "PDS", "WEB", "FBD"];
  return (
    <div className="App">
      <Questao01 
      nome="Rodrigo"
      sobrenome="Moraes"
      curso="Engenharia de Software"
      disciplinas={disp}
       />

       <Questao02 />
       <Questao03 /> 
        <Questao04 />
    </div>
  )
}
export default App;
