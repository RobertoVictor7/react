'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.state = {
      time: 0
    }

    this.timer
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate timer', this.props, nextProps)
    return this.state.time !== nextState.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', this.props, prevProps)
  }

  componentDidMount () {
    console.log('componentDidMount Timer')
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
