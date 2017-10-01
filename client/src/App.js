import React, { Component } from 'react';
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAppBar from './components/headers/material-ui/MyAppBar';

const title = 'Budgeteer v1.0';

class App extends Component {
  onPressLeftMenu = () => {
    alert('hi');
  }
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Budgeteer
        </p>*/}
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <MyAppBar
            title={title}
            onPressLeftMenu={this.onPressLeftMenu}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
