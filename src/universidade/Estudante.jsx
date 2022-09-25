import React from "react"

const estudante = ({nome,curso,universidade,disciplina}) => {
  // const {nome,curso,universidade} = props

  return(
  <div> 
    Nome: {nome}<br/>
    Curso: {curso}<br/>
    Universidade: {universidade}<br/>
    Disciplina: {disciplina}<br/>
  </div>
  )
}
export default estudante