'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars.githubusercontent.com/u/78868541?v=4' />

    <h1 className='username'>
      <a href='https://github.com/RobertoVictor7'>
        Victor Roberto de Andrade Oliveira
      </a>
    </h1>
    <ul className='repos-info'>
      <li> Repositórios: 122 </li>
      <li> Seguidores: 10 </li>
      <li> Seguindo: 11 </li>
    </ul>
  </div>
)

export default UserInfo
