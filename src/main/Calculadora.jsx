import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("")
    const [tecla, setTecla] = useState("")

    const inicializaVariaveis = () => {
        setDisplay("0")
        setMemoria("")
        setTecla("")
    }

    const inicializaDisplay = () => {
        setDisplay("0")
        setTecla("")
    }

    const backSpace = () => setDisplay(display.substring(0,display.length-1))

    const replace = (str) => str.replace("%","/100").replace("÷","/").replace("x","*")

    const calcular = () => {
        if (tecla === "%" || tecla === "÷" || tecla === "x" || tecla === "-" || tecla === "+"){
            let expressao = replace(display)  
            let memoAux = replace(memoria === "0" ? "" : memoria)
            setDisplay(eval(memoAux.substring(0, memoAux.length-1)))
        }
        else if (tecla === "="){
            let expressao = replace(display)  
            let memoAux = replace(memoria === "0" ? "" : memoria)
            setMemoria(memoAux+expressao)
            setDisplay(eval(memoAux+expressao))
        }            
    }
     
    const atualizaDisplay = (digito) => { 
        setTecla(digito)
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
                if(digito === "%" || digito === "÷" || digito === "x" || digito === "-" || digito === "+"){   
                    let memoAux = (memoria === "0" ? "" : memoria) + display+digito    
                    setMemoria(memoAux)                           
                }else{
                    setDisplay(digito) 
                }     
        }            
    };

    useEffect(() => {
        if (!Number.isNaN(Number(display)))
            setDisplay(String(Number(display)).substring(0,10))
    },[display])

    useEffect(() => {        
        calcular() 
    },[memoria])

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