'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={() => { alert('click') }}>
        <Square />
      </div>
    )
  }
}

export default App
