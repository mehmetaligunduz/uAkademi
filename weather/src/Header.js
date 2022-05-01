import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div><h6>{this.props.title}</h6></div>
    )
  }
}
