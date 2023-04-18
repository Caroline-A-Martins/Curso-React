// Carregando CSS
import './index.css'
import ReactDOM  from 'react-dom'
import React from 'react'

// Importando Componente
import Primeiro from './componentes/basicos/Primeiro '

import Segundo from './componentes/basicos/Segundo'

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
