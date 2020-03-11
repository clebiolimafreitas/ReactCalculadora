import React from 'react'
import './Botao.css'

export default props => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.label}
        </button>        
    )
}