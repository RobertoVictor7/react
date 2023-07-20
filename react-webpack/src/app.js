'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name="victor" lastName={2}/>
      </div>
        
    )
  }
})

export default App
