'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Title from './title'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  constructor () {
    super() // super executa o component e trás os metodos e propriedades do Component
    this.state = {
      text: 'Fulano'
    }
  }

  render () {
    return (
      <div className='container'>
        <p onClick={() => this.setState({ text: 'Ciclano' })}>
          {this.state.text}
        </p>

        <Title name='Victor' lastName='Roberto' />
        <Square />
        <Button>
          <span>Texto </span>
          Outro texto
        </Button>

        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
