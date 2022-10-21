import React from 'react';
import './App.css';
import Questao01 from './components/questao1/Questao01'
import Questao01A from './components/questao1/Questao01A';
import Questao01B from './components/questao1/Questao01B';
import Questao02 from './components/questao2/Questao02'
import Questao03 from './components/questao3/Questao03'
import Questao04 from './components/questao4/Questao04'
import Questao05 from './components/questao5/Questao05';

function App(){ 
  
   return (
    <div className="App">
      <Questao01>
      <Questao01A />
        <Questao01B />
      </Questao01>

       <Questao02 />
       <Questao03 /> 
        <Questao04 />
        <Questao05 />
    </div>
  )
}
export default App;
