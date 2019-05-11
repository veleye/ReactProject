import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  clickEvent = e => {
    this.setState({
    
    });
  };

  deleteUserEvent = (e) => {
    const {id, deleteUser} = this.props;
    deleteUser(id);
  }

  render() {
    const { id, name, age} = this.props;
    return (
      <div className="col-md-20 mb-4">
        <div className="card">
          <div className="card-header d-flex  justify-content-between">
            <h4 className="d-inline" onClick={this.clickEvent}></h4>
            <i className="far fa-trash-alt" onClick = {this.deleteUserEvent} style={{ cursor: "pointer" }} />
          </div>
    
            <div className="card-body">
              <p className="card-text">Id : {id}</p>
              <p className="card-text">Name : {name}</p>
              <p className="card-text">Age : {age}</p>
            </div>
    
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};

User.defaultProps = {
  name: "name",
  department: "department",
  age: "age"
};

export default User;
