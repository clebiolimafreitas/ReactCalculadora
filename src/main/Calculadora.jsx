import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("")
    const [substitui, setSubstitui] = useState(false)
    const [calcula, setCalcula] = useState(false)
    //const []    

    function replace(str){
        return str.replace("%","/100").replace("÷","/").replace("x","*")
    }
     
    const atualizaDisplay = (tecla) => { 
        switch (tecla)
        {
            case "C":
                setDisplay("0")
                break 
            case "CE":
                setDisplay("0")
                break
            case "←":
                setDisplay(display.substring(0,display.length-1))
                break
            case "=":
                let expressao = replace(display)     
                let memoAux = memoria === "0" ? "" : memoria
                setDisplay(eval(expressao))
                setMemoria(memoAux+expressao)
                setSubstitui(true)
                break
            default:    
                if (substitui){
                    if(tecla === "%" || tecla === "/" || tecla === "x" || tecla === "-" || tecla === "+"){                            
                        setDisplay(display+tecla)  
                    }else{
                        setDisplay(tecla) 
                    }     
                    setMemoria("")
                }                    
                else{
                    setDisplay(display+tecla)                    
                }
                setSubstitui(false)
        }            
    };

    useEffect(() => {
        if (!Number.isNaN(Number(display)))
            setDisplay(String(Number(display)).substring(0,10))
    },[display])

    const botoes = [
        {label: "%"},{label: "C"},{label: "CE"},{label: "←"},        
        {label: "7"},{label: "8"},{label: "9"},{label:"÷"},
        {label: "4"},{label: "5"},{label: "6"},{label: "x"},
        {label: "1"},{label: "2"},{label: "3"},{label: "-"},
        {label: "0"},{label: "."},{label: "="},{label: "+"}
    ]

    const listaBotoes = botoes.map((botao, index) => <Botao key={index} label={botao.label} className={botao.className} onClick={() => atualizaDisplay(botao.label)}/>)

    return (       
        <div className="calculadora">
            <Display value={display} memoria={memoria}/>                
            {listaBotoes}
        </div>    
    )
}