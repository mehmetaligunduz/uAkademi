import React, { Component } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Badge,
} from "reactstrap";

export default class BasketComponent extends Component {
  render() {
    return (
      <UncontrolledDropdown inNavbar nav disabled = {this.props.basket.length === 0 ?true:false}>
        <DropdownToggle caret nav>
          Basket <sup>{this.props.basket.length}</sup>
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.basket.map((item, index) => (
            <DropdownItem key={index} onClick={() => this.props.removeItem(item.product)} >
              {item.product.productName}
              <Badge color="primary" pill>
                {item.quantity}
              </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
