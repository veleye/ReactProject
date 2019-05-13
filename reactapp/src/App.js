import React, {Component} from "react";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";

class App extends Component{

  render() {

    return (
      <div className = "container">
        <Navbar title="User App"/>
        <h2/>
        <AddUser/>
        <Users />
      </div>
    );
  }

}

export default App;
