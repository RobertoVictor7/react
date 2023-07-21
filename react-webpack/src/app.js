'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'
import Title from './title'

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
      </div>
    )
  }
}

export default App
