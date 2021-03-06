import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Burger.css';
import { push as Menu } from 'react-burger-menu'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu  pageWrapId={ "page-wrap" }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <main id="page-wrap">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </main>
      </div>
    );
  }
}

export default App;
