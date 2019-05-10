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
      isVisible : !this.state.isVisible
    });
  };

  render() {
    const { name, department, age } = this.props;
    return (
      <div className="col-md-20 mb-4">
        <div className="card">
          <div className="card-header d-flex  justify-content-between">
            <h4 className="d-inline" onClick={this.clickEvent}>
              {name}{" "}
            </h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }} />
          </div>
          {this.state.isVisible ? (
            <div className="card-body">
              <p className="card-text">Name : {name}</p>
              <p className="card-text">Department : {department}</p>
              <p className="card-text">Age : {age}</p>
            </div>
          ) : null}
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
