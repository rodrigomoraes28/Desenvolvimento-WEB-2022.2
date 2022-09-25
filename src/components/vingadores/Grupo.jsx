import React from 'react'
import Heroi from './Heroi'

/*const Grupo = ({titulo})=>{
  return(
    <div>
        <h1>{titulo}</h1>
        <Heroi nome='Capitão América' />
        <Heroi nome='Hulk' />
        <Heroi nome='Viúva Negra' />
    </div>
  )
}
export default Grupo
*/

/*
const Grupo = (props) =>{

    return(
      <div>
        <h1>{props.titulo}</h1>
        <h1>{props.children}</h1>
      </div>
    )
}

export default Grupo
*/

const Grupo = ({children,titulo}) =>{

  return(
    <div>
      <h1>{titulo}</h1>
      {
        React.Children.map(
          children,
           (elemento) => React.cloneElement(elemento,{titulo})
          
        )
      }
     </div>
  )
}

export default Grupo