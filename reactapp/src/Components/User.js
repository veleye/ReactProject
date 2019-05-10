import React, { Component } from "react";

class User extends Component {
  render() {
    const {name, department, age} = this.props;
    return (
      <div>
        <ul>
          <li>isim : {name}</li>
          <li>department : {department}</li>
          <li>age : {age}</li>
        </ul>
      </div>
    );
  }
}

export default User;
