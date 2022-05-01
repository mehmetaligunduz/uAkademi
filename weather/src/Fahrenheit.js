import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>{this.props.title}: {(this.props.heat * 1.8 + 32).toFixed(2)}<sup>o</sup>F</div>
    )
  }
}
