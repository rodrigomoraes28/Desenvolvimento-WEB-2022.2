import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Questao2 = () => {
  const[num1, set_num1] = useState(0);
  const[num2, set_num2] = useState(0);
  const[resultado, set_resultado] = useState(0);

 
   
  const calcular_soma = () =>{
      set_resultado(parseFloat(num1) + parseFloat(num2))
  }
  const calcular_diferenca = () =>{
     
    set_resultado(parseFloat(num1) - parseFloat(num2))
  }
  const calcular_mutiplicacao = () =>{
   
    set_resultado(parseFloat(num1) * parseFloat(num2))
  }
  const calcular_divisao =() =>{
      
    set_resultado(parseFloat(num1)/parseFloat(num2))
  }
  
  return(
    <div className='App'>
      <div style={{margin:100}} />
       <h1 style={{margin:20}} >Calculadora</h1>  
  
    <input
    type='number'
    value={num1}
    onChange={(evento) => set_num1(evento.target.valueAsNumber)}
    placeholder="Numero 1"
    
    /> 
    <span style={{paddingLeft:20}}/>
    <input
    type='number' 
    value={num2}
    onChange={(evento) => set_num2(evento.target.valueAsNumber)}
    placeholder="Numero 2"/>
    
    <div style={{margin:20}}  />
    <button className="btn btn-primary" onClick={calcular_soma}>+</button>
    <span style={{paddingLeft:20}}/>

    <button className="btn btn-primary" onClick={calcular_diferenca}>-</button>
    <span style={{paddingLeft:20}}/>

    <button className="btn btn-primary" onClick={calcular_mutiplicacao}>*</button>
    <span style={{paddingLeft:20}}/>

    <button className="btn btn-primary" onClick={calcular_divisao}>/</button>
  
    <div />
    <label>Resultado: {resultado}</label>
      </div>  
  )

}

export default Questao2;
  