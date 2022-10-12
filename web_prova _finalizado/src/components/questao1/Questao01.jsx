import react from 'react'
import Questao01A from './Questao01A';
import Questao01B from './Questao01B';


function Questao01(props){
  return(
      <div>
          <h1>Questão 01.</h1> <br />
          <Questao01A nome={props.nome} sobrenome={props.sobrenome} curso={props.curso}/>
          <Questao01B disciplinas={props.disciplinas}/>
      </div>
  )
}

export default Questao01