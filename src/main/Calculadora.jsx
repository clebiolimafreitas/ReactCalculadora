import React, {useState, useEffect} from 'react'
import Botao from '../compententes/Botao'
import Display from '../compententes/Display'
import './Calculadora.css'

export default props => {

    const [display, setDisplay] = useState("0")
    const [memoria, setMemoria] = useState("0")
    const [tecla, setTecla] = useState("")

    const inicializaVariaveis = _ => {
        setDisplay("0")
        setMemoria("0")
        setTecla("0")
    }

    const inicializaDisplay = _ =>{
        setDisplay("0")
        setTecla("0")
    }

    const backSpace = _ => setDisplay(display.substring(0,display.length-1))

    const myReplace = str => str.replace(/%/g,'/100').replace(/÷/g,'/').replace(/x/g,'*')

    const atualizaMemoriaCalculo = _ => {
        //debugger
        try{
            if('+-x÷='.indexOf(tecla) < 0) {//numeros        
                setDisplay(eval(myReplace(memoria)))           
            }else if (tecla === "=" || '+-x÷'.indexOf(memoria.substring(memoria.length-2, memoria.length-1)) >= 0){ // pressionado igual(=) ou penúltima tecla foi um operador  
                //criando regra para descobrir o indice do último operador digitado
                const regex = new RegExp( /x|\+|\-|÷/, "g" )
                regex.test(memoria.substring(0,memoria.length-2))
                const indexUltimoOperador = regex.lastIndex
                setTecla(memoria.substring(memoria.length-3,memoria.length-2)) //atualiza tecla atual para o último número digitado
                // substitui o último operador digitado pelo novo
                setMemoria(memoria.substring(0,memoria.length-2)+tecla+memoria.substring(indexUltimoOperador,memoria.length-2)) 
            }else if ('+-x÷'.indexOf(tecla) >= 0){ //operadores
                setDisplay(eval(myReplace(memoria.substring(0,memoria.length-1))))  
            }
        }catch(e){
            inicializaVariaveis()
            setDisplay("Error")
            console.log(e)
        }        
    }
     
    const atualizaDisplay = digito => { 
        try{
            setTecla(String(digito))
            if (digito === "C"){
                inicializaVariaveis()
            }else if (digito === "CE"){
                inicializaDisplay()
            }else if (digito === "←"){
                backSpace()       
            }else if(digito !== "="){
                setMemoria(memoria+digito)     
            }else if(memoria === "0"){
                setMemoria(digito)                    
            }
        }catch(e){
            inicializaVariaveis()
            setDisplay("Error")
            console.log(e)
        }        
    }

    useEffect(() => {    
        atualizaMemoriaCalculo()           
    },[memoria])// eslint-disable-line

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