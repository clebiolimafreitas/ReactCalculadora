import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("0")
    //const [resultado, setResultado] = useState("0")

    useEffect(() => {
        switch (memoria)
        {
            case "C":
                setDisplay("0")
                break
            case "CE":
                setDisplay("0")    
                break            
            default:
                setDisplay(String(Number(display+memoria)))
        }
            
    },[memoria],)

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
            <h1>Calculadora</h1>
            <div className="calculadora">
                <Display value={display} />
                <Botao label="%" onClick={() => setMemoria("%")}/>
                <Botao label="C" onClick={() => setMemoria("C")}/>
                <Botao label="CE" onClick={() => setMemoria("CE")}/>
                <Botao label="/" onClick={() => setMemoria("/")}/>
                <Botao label="7" onClick={() => setMemoria("7")}/>
                <Botao label="8" onClick={() => setMemoria("8")}/>
                <Botao label="9" onClick={() => setMemoria("9")}/>
                <Botao label="x" onClick={() => setMemoria("x")}/>
                <Botao label="4" onClick={() => setMemoria("4")}/>
                <Botao label="5" onClick={() => setMemoria("5")}/>
                <Botao label="6" onClick={() => setMemoria("6")}/>          
                <Botao label="-" onClick={() => setMemoria("-")}/>
                <Botao label="1" onClick={() => setMemoria("1")}/>
                <Botao label="2" onClick={() => setMemoria("2")}/>
                <Botao label="3" onClick={() => setMemoria("3")}/>
                <Botao label="+" onClick={() => setMemoria("+")}/>
                <Botao label="0" onClick={() => setDisplay("0")}/>
                <Botao label="." onClick={() => setDisplay(".")}/>
                <Botao label="=" onClick={() => setDisplay("=")} className="double"/>                
            </div>            
        </div>
    )
}