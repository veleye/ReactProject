import React, {Component} from "react";
import Users from "./components/Users";
import Navbar from "./components/Navbar";


class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      users : [
        {
          id : "1",
          name : "erkan",
          age : "30"
        },
        {
          id : "2",
          name : "yasin",
          age : "20"
        },
        {
          id : "3",
          name : "elif",
          age : "32"
        }
      ]
    }



  }

  deleteUser = (id) => {  
    this.setState({
      users : this.state.users.filter(user => user.id !== id)
    });
  }

  render() {

    return (
      <div className = "container">
        <Navbar title="User App"/>
        <Users 
          users = {this.state.users} 
          deleteUser = {this.deleteUser}/>
      </div>
    );
  }

}

export default App;
