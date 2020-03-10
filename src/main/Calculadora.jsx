import React from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props =>
{
    const botoes = ["%","C","CE","/",
                    "7","8","9","X",
                    "4","5","6","-",
                    "1","2","3","+",
                    "0",".","="];
                    
    const listaBotoes = botoes.map((botao) => <Botao label={botao}/>);

    return (
        <React.Fragment>
            <h1>Calculadora</h1>            
            <div className="calculadora">     
                <Display value={0}/>   
                {listaBotoes}                
            </div>             
        </React.Fragment>        
    );
}