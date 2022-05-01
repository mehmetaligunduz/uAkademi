import React, { Component } from 'react'

export default class Celcius extends Component {
  render() {
    return (
      <div>{this.props.title}: {this.props.heat}<sup>o</sup>C</div>
    )
  }
}
