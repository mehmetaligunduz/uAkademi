import React, { Component} from "react";
import axios from "axios";

export default class Users extends Component {
  state = { isLoading: true, users: [] };

  componentDidMount() {
    // İlk Önce "Fetch" işleminin başladığını belirtmek için ve "Loading", tetiklemek için state'i değiştiriyoruz.
    this.setState({ isLoading: true });

    // Burada "Fetch" işleminden önce bir "Timeout" veriyorum.
    setTimeout(
      function () {
        this.setState({ isLoading: false });
      }.bind(this),
      1000
    );

    // "Fetch" İşlemini Gerçekleştirip "state" üzerine yazıyoruz.
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return <div>
        {this.state.isLoading && <h1>Loading...</h1>}
        <ul>
        {!this.state.isLoading && this.state.users.map(user => (
            <li key={user.id}>{user.username}: {user.name}</li>
        ))}
        </ul>
    </div>;
  }
}
