import React, { Component } from "react";
import PropTypes from "prop-types";
import ConsumerContext from "./context";

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

  deleteUserEvent = (dispatch, e) => {
    const {id} = this.props;
    dispatch({
      type:"DELETE_USER",
      payload: id 
    })
  }

  render() {
    const { id, name, age} = this.props;
    return (
      <ConsumerContext>
        {
          value => {
            const {dispatch} = value;
            return (
              <div className="col-md-8 mb-4">
                <div className="card">
                  <div className="card-header d-flex  justify-content-between">
                    <h4 className="d-inline" onClick={this.clickEvent}></h4>
                    <i className="far fa-trash-alt" onClick = {this.deleteUserEvent.bind(this, dispatch)} style={{ cursor: "pointer" }} />
                  </div>
            
                    <div className="card-body">
                      <p className="card-text">Id : {id}</p>
                      <p className="card-text">Name : {name}</p>
                      <p className="card-text">Age : {age}</p>
                    </div>
            
                </div>
              </div>
            )
          }
        }
      </ConsumerContext>
    )
  
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
