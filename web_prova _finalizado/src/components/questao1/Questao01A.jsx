import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Questao01A = ({nome, sobrenome, curso}) => {

    nome = 'Rodrigo';
    sobrenome = 'Moraes';
    curso = 'Engenharia de Software';
    
    return ( 

        <div>
            <h3> NOME: {nome} </h3>
            <h3> SOBRENOME: {sobrenome} </h3>
            <h3> CURSO: {curso} </h3> <br />
        </div>

    )
}




export default Questao01A;
