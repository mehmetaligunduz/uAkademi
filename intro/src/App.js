import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigate from "./Navigate";
import Kategori from "./Kategori";
import UrunList from "./urunList";


export default class App extends Component {
  state = { currentCategory: "", basket: [] };
  getCurrentCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
      currentCategoryId: category.categoryId,
    });
  };

  add2Cart = (product) =>  {
    let basket = this.state.basket;
    var isExist = basket.find((e) => e.product.productId === product.productId);
    console.log(isExist);
    if (isExist) {
      isExist.quantity += 1;
    } else {
      basket.push({ product: product, quantity: 1 });
    }
    this.setState({ basket: basket });
  }

  removeFromCart = (product) => {
    let remainBasket = this.state.basket.filter(p => p.product.productId !== product.productId); 
    this.setState({basket:remainBasket});

  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Navigate basket={this.state.basket}  removeItem={this.removeFromCart}/>
          </Row>
          <Row>
            <Col md="3">
              <Kategori
                title="Categories"
                getCurrentCategory={this.getCurrentCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col md="9">
              <UrunList
                title="Product List"
                currentCategory={this.state.currentCategory}
                currentCategoryId={this.state.currentCategoryId}
                add2Cart={this.add2Cart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}