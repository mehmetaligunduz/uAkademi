import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";

import BasketComponent from "./BasketComponent";

export default class Navigate extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md py-4 mb-4" light>
          <NavbarBrand href="/">Sepetim.com</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0" navbar>
              <NavItem>
                <NavLink></NavLink>
              </NavItem>
              <NavItem>
                <NavLink></NavLink>
              </NavItem>
              <BasketComponent basket={this.props.basket} removeItem={this.props.removeItem}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
