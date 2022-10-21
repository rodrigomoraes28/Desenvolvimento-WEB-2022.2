import React from 'react'


const Questao01B = () => {

    
    let Disciplinas = ["PI", "PDS", "WEB", "FBD"]


    const listarDisciplinas = () => {
        return Disciplinas.map(
            (disciplina, index) => {

                return(
                    <h3> {disciplina} </h3>
                )
            }
        )
    }

    return (
        <div>
            <h3 className="text-primary" > Disciplinas: </h3>
            {listarDisciplinas()}
        </div>
    )
}

export default Questao01B;
