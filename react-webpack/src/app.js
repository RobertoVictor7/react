'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'default textarea'
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log('submit no form', e)
        }}
        >
          <textarea
            name='textarea'
            value={this.state.value}
            onChange={(e) => {
              this.setState({ value: e.target.value })
            }}
          />
          <button type='submit'> Enviar </button>
        </form>
      </div>
    )
  }
}

export default App
