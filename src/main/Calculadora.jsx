import React from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {
    const botoes = [
        {label: "%"},{label: "C"},{label: "CE"},{label:"/"},
        {label: "7"},{label: "8"},{label: "9"},{label: "X"},
        {label: "4"},{label: "5"},{label: "6"},{label: "-"},
        {label: "1"},{label: "2"},{label: "3"},{label: "+"},
        {label: "0"},{label: "."},{label: "=", className: "double"}
    ];

    const listaBotoes = botoes.map((botao) => <Botao {...botao} />);

    return (
        <React.Fragment>
            <h1>Calculadora</h1>
            <div className="calculadora">
                <Display value={0} />
                {listaBotoes}
            </div>
        </React.Fragment>
    );
}