'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Title from './title'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
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
