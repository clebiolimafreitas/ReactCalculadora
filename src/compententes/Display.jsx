import React from 'react'
import './Display.css'

export default props => 
    <div className="display">     
        <div className="subDisplay">
            <h6>{props.memoria}</h6>
        </div>   
        {props.value}
    </div>