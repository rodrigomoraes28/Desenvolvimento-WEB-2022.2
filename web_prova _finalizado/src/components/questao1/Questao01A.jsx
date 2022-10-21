import React from 'react'


const Questao01A = ({nome, sobrenome, curso}) => {

    nome = 'Rodrigo';
    sobrenome = 'Moraes';
    curso = 'Engenharia de Software';
    
    return ( 

        <div>
            <h3> Nome: {nome} </h3> 
            <h3> Sobrenome: {sobrenome} </h3>
            <h3> Curso: {curso} </h3> <br />
        </div>

    )
}

 


export default Questao01A;
