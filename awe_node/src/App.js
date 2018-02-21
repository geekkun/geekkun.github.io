import React, { Component } from 'react';

import Reboot from 'material-ui/Reboot';
import './App.css';
import './header.js';
import Header from "./header";
import SignUp from "./signup";


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Reboot />*/}
          <Header/>
          <SignUp/>
      </div>
    );
  }
}

export default App;
