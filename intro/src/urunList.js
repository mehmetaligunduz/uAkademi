import React, { Component } from "react";
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap";

export default class urunList extends Component {
  state = { products: [] };

  getProducts() {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Products</BreadcrumbItem>
          <BreadcrumbItem >{this.props.currentCategory}</BreadcrumbItem>
        </Breadcrumb>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Category Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.state.products.filter(product => product.categoryId === this.props.currentCategoryId).map((product) => (
              <tr key={product.productId}>
                <th scope="row">{product.productId}</th>
                <td>{product.productName}</td>
                <td>{this.props.currentCategory}</td>
                <td>{product.unitPrice}₺</td>
                <td>
                  <Button
                    outline
                    color="success"
                    onClick={() => this.props.add2Cart(product)}
                  >
                    + Add to Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
  