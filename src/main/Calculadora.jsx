import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("0")
    const [tecla, setTecla] = useState("")

    const inicializaVariaveis = _ => {
        setDisplay("0")
        setMemoria("0")
        setTecla("0")
    }

    const inicializaDisplay = _ =>{
        setDisplay("0")
        setTecla("0")
    }

    const backSpace = _ => setDisplay(display.substring(0,display.length-1))

    const myReplace = str => {
        return str.replace(/%/g,'/100').replace(/÷/g,'/').replace(/x/g,'*')
    }

    const calcular = _ => {
        setDisplay(eval(myReplace(memoria)).toString())        
    }
     
    const atualizaDisplay = digito => { 
        setTecla(String(digito))
        switch (digito)
        {           
            case "C":
                inicializaVariaveis()
                break 
            case "CE":
                inicializaDisplay()
                break
            case "←":
                backSpace()
                break
            case "=":
                calcular()     
                break
            default:  
                if(memoria === "0")
                    setMemoria(digito) 
                else
                    setMemoria(memoria+digito)      
        }            
    };

    useEffect(() => {        
        if('%+-x÷'.indexOf(tecla) < 0)
            calcular()           
    },[memoria])// eslint-disable-line

    const botoes = [
        "%","C","CE","←",        
        "7","8","9","÷",
        "4","5","6","x",
        "1","2","3","-",
        "0",".","=","+"
    ]

    const listaBotoes = botoes.map((botao, index) => <Botao key={index} label={botao} onClick={() => atualizaDisplay(botao)}/>)

    return (       
        <div className="calculadora">
            <Display value={display} memoria={memoria}/>                
            {listaBotoes}
        </div>    
    )
}