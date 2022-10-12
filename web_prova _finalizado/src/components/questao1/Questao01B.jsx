import react from 'react'

function Disciplinas(props) {
  return <li>{ props.disciplinas }</li>;
}

function Questao01B(props){
  return(
      <div>
          <h3>Disciplinas: </h3>
          <ul>
              {props.disciplinas.map((disciplinas) => <Disciplinas disciplinas={disciplinas} />)}
          </ul>
      </div>
  )
}
export default Questao01B