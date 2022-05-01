import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Kategori extends Component {
    constructor (props) {
        super(props);
        this.state = {
            categories: [
                {id:"1", name:"Kozmetik"},
                {id:"2", name:"Elektronik"},
                {id:"3", name:"Gıda"},
                {id:"4", name:"Sağlıklı Beslenme"},
                {id:"5", name:"Beyaz Eşya"}
            ],
        };
    }

    getAllCategories() {
      fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({categories: data}))
    }
    
    componentDidMount() {
      this.getAllCategories();
    }
   
  render() {
    return (
      <div>
        <ListGroup>
            {this.state.categories.map((category) => (
                <ListGroupItem
                active={category.categoryName === this.props.currentCategory ? true : false }
                onClick={() => this.props.getCurrentCategory(category)} 
                key={category.categoryId} value={category.categoryName}>{category.categoryName}</ListGroupItem>
            ))}
        </ListGroup>
      </div>
    );
  }
}
