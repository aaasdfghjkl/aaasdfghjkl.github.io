import React, { Component } from "react";
import "./App.css";
import Content from './component/Content'
import FormSignUp from './component/FormSignUp'
import Chart from './component/Chart'
import InvestQuick from './component/InvestQuick'
import Char from './component/char'

class App extends Component {
  render() {
    return (
      <div >
      <Char/>
      <Content/>
      <Chart/>
      <InvestQuick/>
      <FormSignUp/>
      </div>
    );
  }
  
}

export default App;
