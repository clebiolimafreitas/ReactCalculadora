import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("")

    function replace(str){
        return str.replace("%","/100").replace("÷","/").replace("x","*")
    }

    function calcular(){
        let expressao = replace(display)     
        let memoAux = memoria === "0" ? "" : memoria
        setMemoria(memoAux+expressao)
        setDisplay(eval(expressao+display))        
    }
     
    const atualizaDisplay = (tecla) => { 
        switch (tecla)
        {
            case "C":
                setDisplay("0")
                setMemoria("")
                break 
            case "CE":
                setDisplay("0")
                break
            case "←":
                setDisplay(display.substring(0,display.length-1))
                break
            case "=":
                calcular()                
                break
            default:    
                if(tecla === "%" || tecla === "/" || tecla === "x" || tecla === "-" || tecla === "+"){   
                    let memoAux = (memoria === "0" ? "" : memoria) + display+tecla    
                    setMemoria(memoAux)   
                    if (calcula){
                        calcular()
                        setCalcula(false)
                    }                   
                }else{
                    setDisplay(tecla) 
                }     
        }            
    };

    useEffect(() => {
        if (!Number.isNaN(Number(display)))
            setDisplay(String(Number(display)).substring(0,10))
    },[display])

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