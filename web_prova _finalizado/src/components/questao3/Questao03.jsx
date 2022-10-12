import react from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from 'react-router-dom';

const Questao03 = () => {

const [procruarParametros, setarProcurarParametros] = useSearchParams();
const [pokemons, setPokemons] = useState([])
const offset = procruarParametros.get('offset') || 0

 



useEffect(
    ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + offset) 
        .then(
            (response)=>{
                setPokemons(response.data.results)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    ,
    [offset]
)

const NovosPokemons =()=>{
  setarProcurarParametros({offset: offset*1 +10}) 
}
 
const ListarPokemons =() =>{

  return pokemons.map(
      (pokemom)=>{
        return(
          <p>{pokemom.name}</p>
        )
      }
 
  )
  
}

return(
  <div>
  <h1 style={{margin:50}}>List de Pokemons</h1>
      {
        ListarPokemons()
      }
  <button className="btn btn-primary" onClick={() => NovosPokemons()} >Novos Pokemons</button>

  </div>
)
   
}
export default Questao03;