import React, {Component} from "react";
import User from "./components/User";
import Navbar from "./components/Navbar";


class App extends Component{

  render() {

    return (
      <div>
        <Navbar title="User App"/>
        <User 
         name = "erkan"
         department = "software"
         age = "30"/>
         <hr/>
         <User 
         name = "yasin"
         department = "medicine"
         age = "20"/>
      </div>
    );
  }

}

export default App;
