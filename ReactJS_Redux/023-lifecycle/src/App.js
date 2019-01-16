import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sstate: 'khoi tao'
    }
  }
  
  componentWillMount() {
    console.log('component will mount');
    
  }
  componentDidMount() {
    console.log('component did mount');
    
  }
  
  
  render() {
    console.log('render');
    
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
