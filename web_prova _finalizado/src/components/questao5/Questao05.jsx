import axios from "axios"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";


const Questao05 = () => {

  const [paises, setarPaises] = useState([])
  const [continente, setarContinente] = useState('africa')

  useEffect(
    () => {
      axios.get(`https://restcountries.com/v2/region/${continente}?fields=name,population`)
        .then(
          (res) => {
            setarPaises(res.data)
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
    }, [continente]
  )


  const pegarMaiorPopulacao = () => {

    let maiorPopulacao = 0
    let maiorNome = ' '
    paises.forEach((country) => {
      if (country.population > maiorPopulacao) {
        maiorPopulacao = country.population
        maiorNome = country.name
      }
    }
    
    )
     return(
            <ul>
                <li>
                    <h3> Maior População</h3>
                    {maiorPopulacao}
                </li>
                <li>
                    <h3> Nome do País</h3>
                    {maiorNome}
                </li>
            </ul>
     )
  }


  const pegarMenorPopulacao = () => {

    let menorPopulacao = 0
    let menorNome = ' '
    paises.forEach((country, index) => {
        if (index === 0) {
            menorPopulacao = country.population
        }

        if (country.population < menorPopulacao) {
            menorPopulacao = country.population
            menorNome = country.name
        }
    }
    
    )
     return(
            <ul>
                <li>
                    <h3> Menor População</h3>
                    {menorPopulacao}
                </li>
                <li>
                    <h3> Nome do País</h3>
                    {menorNome}
                </li>
            </ul>
     )
  }

  const getResult = () => {
    if (continente === 'americas') {
        return pegarMaiorPopulacao()
    } else {
        return pegarMenorPopulacao()
    }
  }

  return (
    <div style={{ margin : 50}} >
        <h1> Escolha uma região </h1>
        <button className="btn btn-primary" style={{ margin : 25}} onClick={(event) => {setarContinente('americas')}}> Americas </button>
        <button className="btn btn-primary" onClick={(event) => {setarContinente('asia')}}> Asia </button>
        {getResult()}
    </div>

  )

}


export default Questao05;
