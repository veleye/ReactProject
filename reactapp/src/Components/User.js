import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    const {name, department, age} = this.props;
    return (
      <div>
        <ul>
          <li>isim : {name} <i className="far fa-trash-alt"></i> </li>
          <li>department : {department}</li>
          <li>age : {age}</li>
        </ul>
      </div>
    );
  }
}

User.propTypes = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  age : PropTypes.string.isRequired
}

User.defaultProps = {
  name : "name",
  department : "department",
  age : "age"
}

export default User;
