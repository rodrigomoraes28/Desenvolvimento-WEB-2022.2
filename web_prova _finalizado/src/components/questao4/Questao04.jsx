import react from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";

const Questao04 = () => {

const [paises,setarPaises] = useState([])
const [populacao, setarPopulacaoPais] = useState({name: "", population: 0})
 

useEffect(
    ()=>{
        axios.get('https://restcountries.com/v2/region/africa?fields=name,population') 
        .then(
            (response)=>{
              setarPaises(response.data)
              var pop_pais = {name: "", population: 0}
              response.data.forEach(
                pais =>{
                  if(pais.population > pop_pais.population){
                    pop_pais = pais
                  }
                }
                )
                setarPopulacaoPais(pop_pais)
              }
        )
          
        
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    ,
    []
)
 
 
 

return(
  <div>
  <h1 style={{margin:50}} background="blue">Paises da África</h1>
      
    <ul>
        {paises.map((pais) => <li>{pais.name}, {pais.population}</li>)}
    </ul>

    <br />
    <h1 style={{margin:25}} >País mais Populoso da África:</h1>

    <h3 className="text-primary"> {populacao.name}, {populacao.population} </h3>
 
  </div>
)
  


}
export default Questao04;