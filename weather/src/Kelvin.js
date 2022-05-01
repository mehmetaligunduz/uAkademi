import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div>{this.props.title}: {this.props.heat + 273.15}<sup>o</sup>K</div>
    )
  }
}
