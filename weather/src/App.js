import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Header from "./Header";
import Fahrenheit from "./Fahrenheit";
import Celcius from "./Celcius";
import Kelvin from "./Kelvin";
export default class App extends Component {
  state = { heat: 0 };
  heatFunction = () => {
    this.setState({ heat: this.state.heat + 1 });
  };
  render() {
    return (
      <Container>
        <Row>
          <h4>Hava Nasıl</h4>
          <p>
            Şuan sıcaklık {this.state.heat}
            <sup>o</sup>C
          </p>
          <Row>
            <Col xs="2">
              <Button onClick={() => this.heatFunction()}>
                Sıcaklık Arttır
              </Button>
            </Col>
          </Row>
        </Row>

        <Row>
          <Header title="3 Birimde Sıcaklık Ölçümü" />
        </Row>
        <Row>
          <Col md="4">
            <Celcius title="Celcius" heat={this.state.heat} />
          </Col>
          <Col md="4">
            <Fahrenheit title="Fahrenheit" heat={this.state.heat} />
          </Col>
          <Col md="4">
            <Kelvin title="Kelvin" heat={this.state.heat} />
          </Col>
        </Row>
      </Container>
    );
  }
}
