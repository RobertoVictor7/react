'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário do GitHub' />
    </div>

    <div className='user-info'>
      <img src='https://avatars.githubusercontent.com/u/78868541?v=4' />
    </div>
    <h1>
      <a href='https://github.com/RobertoVictor7'>Victor Roberto de Andrade Oliveira</a>
    </h1>

    <ul className='repos-info'>
      <li> Repositórios: 122 </li>
      <li> Seguidores: 10 </li>
      <li> Seguindo: 11 </li>
    </ul>

    <div className='actions'>
      <button>Ver repositórios</button>
      <button>Ver favoritos</button>
    </div>

    <div className='repos'>
      <h2>Repositórios:</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>

    <div className='starred'>
      <h2>Favoritos:</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>
  </div>
)

export default App
