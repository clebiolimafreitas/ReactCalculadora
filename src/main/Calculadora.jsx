import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState(0)

    useEffect(() => {
        console.log(display)
    })

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
                <Botao label="%" onClick={() => setDisplay("%")}/>
                <Botao label="C" onClick={() => setDisplay("C")}/>
                <Botao label="CE" onClick={() => setDisplay("CE")}/>
                <Botao label="/" onClick={() => setDisplay("/")}/>
                <Botao label="7" onClick={() => setDisplay("7")}/>
                <Botao label="8" onClick={() => setDisplay("8")}/>
                <Botao label="9" onClick={() => setDisplay("9")}/>
                <Botao label="x" onClick={() => setDisplay("x")}/>
                <Botao label="4" onClick={() => setDisplay("4")}/>
                <Botao label="5" onClick={() => setDisplay("5")}/>
                <Botao label="6" onClick={() => setDisplay("6")}/>          
                <Botao label="-" onClick={() => setDisplay("-")}/>
                <Botao label="1" onClick={() => setDisplay("1")}/>
                <Botao label="2" onClick={() => setDisplay("2")}/>
                <Botao label="3" onClick={() => setDisplay("3")}/>
                <Botao label="+" onClick={() => setDisplay("+")}/>
                <Botao label="0" onClick={() => setDisplay("0")}/>
                <Botao label="." onClick={() => setDisplay(".")}/>
                <Botao label="=" onClick={() => setDisplay("=")} className="double"/>                
            </div>            
        </div>
    )
}