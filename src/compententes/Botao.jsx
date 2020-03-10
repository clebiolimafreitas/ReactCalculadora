import React from 'react'
import './Botao.css'

export default props => {
    return (
        <button className={props.className}>
            {props.label}
        </button>        
    )
}