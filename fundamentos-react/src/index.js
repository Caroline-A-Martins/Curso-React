// Carregando CSS
import './index.css'
import ReactDOM  from 'react-dom'
import React from 'react'

// Importando Componente
import Primeiro from './componentes/basicos/Primeiro'
import Primeiro2 from './componentes/basicos/Primeiro2'

// Importando o parametro
import ComParametro from './componentes/basicos/ComParametro'

//Exibindo String na Tela, Conhecendo JSX
const el = document.getElementById('root')
ReactDOM.render('Olá Mundo!',el)

ReactDOM.render(
    <div>
        <strong>Olá Mundo 1</strong>
    </div>,
    document.getElementById('root')
    )

const tag = <strong>Olá Mundo 2</strong>
ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')        
)

// Escreve na tela o componente criado  
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')        
)

// Escreve na tela o componente criado e o parametro 
ReactDOM.render(
    <div id='app'>
        <Primeiro2></Primeiro2>
        <ComParametro 
        titulo="Situação " 
        aluno="Maria" nota = {7.5}/>
    </div>,
    document.getElementById('root')        
)
