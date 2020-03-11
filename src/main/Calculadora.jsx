import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("0")
    const [substitui, setSubstitui] = useState("0")

    function replace(str){
        return str.replace("%","/100").replace("÷","/").replace("x","*")
    }
    
    useEffect(() => {
        switch (memoria)
        {
            case "C":
                setDisplay("0")
                setMemoria("0")
                break 
            case "CE":
                setDisplay("0")
                break 
            case "=":
                let expressao = replace(display)                 
                setDisplay(eval(expressao))
                setSubstitui("1")
                break
            default:    
                console.log(substitui) 
                if (substitui === "1"){
                    setDisplay(memoria)
                    setSubstitui("0")
                }                    
                else
                    setDisplay(display+memoria)
        }            
    },[memoria])// eslint-disable-line

    useEffect(() => {
        if (!Number.isNaN(Number(display)))
            setDisplay(String(Number(display)))
    },[display])

    /*const botoes = [
        {label: "%"},{label: "C"},{label: "CE"},{label:"/"},
        {label: "7"},{label: "8"},{label: "9"},{label: "X"},
        {label: "4"},{label: "5"},{label: "6"},{label: "-"},
        {label: "1"},{label: "2"},{label: "3"},{label: "+"},
        {label: "0"},{label: "."},{label: "=", className: "double"}
    ]

    const listaBotoes = botoes.map((botao) => <Botao {...botao}*/

    return (
        <div>           
            <div className="calculadora">
                <Display value={display} />                
                <Botao label="CE" onClick={() => setMemoria("CE")} className="double"/>
                <Botao label="C" onClick={() => setMemoria("C")}/>
                <Botao label="%" onClick={() => setMemoria("%")}/>
                
                <Botao label="7" onClick={() => setMemoria("7")}/>
                <Botao label="8" onClick={() => setMemoria("8")}/>
                <Botao label="9" onClick={() => setMemoria("9")}/>
                <Botao label="÷" onClick={() => setMemoria("÷")}/>
                
                <Botao label="4" onClick={() => setMemoria("4")}/>
                <Botao label="5" onClick={() => setMemoria("5")}/>
                <Botao label="6" onClick={() => setMemoria("6")}/>   
                <Botao label="x" onClick={() => setMemoria("x")}/>
                
                <Botao label="1" onClick={() => setMemoria("1")}/>
                <Botao label="2" onClick={() => setMemoria("2")}/>
                <Botao label="3" onClick={() => setMemoria("3")}/>
                <Botao label="-" onClick={() => setMemoria("-")}/>
                
                <Botao label="0" onClick={() => setMemoria("0")}/>
                <Botao label="." onClick={() => setMemoria(".")}/>
                <Botao label="=" onClick={() => setMemoria("=")}/>
                <Botao label="+" onClick={() => setMemoria("+")}/>
            </div>            
        </div>
    )
}