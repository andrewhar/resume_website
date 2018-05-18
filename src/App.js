import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import star from './images/star.jpg'
import Blog from './components/Blog'
import Project from './components/Project'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={star} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Website of Andrew</h1>
        </header>
        <p className="App-intro">
          <strong>Andrew Har</strong> is a self-taught programmer with passion in coding and cutting-edge technology, good team spirit and great analytic mind
        </p>
        <h1 className="heading" id="project">Project</h1>
          <Project />
        <h2 className="heading" id="blog">Blog</h2>
          <Blog />
      </div>
    );
  }
}

export default App;
