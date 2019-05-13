import React, { Component } from "react";

const UserContext = React.createContext();
//Provider Consumer verecek...

const reducer = (state,action) => {
  switch(action.type){
    case  "DELETE_USER" : 
    return {
      ...state,
      users : state.users.filter(user => action.payload !== user.id)
    }
  }
}

export class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: "1",
          name: "erkan",
          age: "30"
        },
        {
          id: "2",
          name: "yasin",
          age: "20"
        },
        {
          id: "3",
          name: "elif",
          age: "32"
        }
      ],
      dispatch : action => {
        this.setState(state => reducer(state, action))
      }
    };
  }

  render() {
    return <UserContext.Provider 
              value = {this.state}>
              {this.props.children}
            </UserContext.Provider>;
  }

}

const ConsumerContext = UserContext.Consumer;
export default ConsumerContext;

