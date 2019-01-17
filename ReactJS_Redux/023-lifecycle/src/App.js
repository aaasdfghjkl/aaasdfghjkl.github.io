import React, { Component } from "react";
import "./App.css";
import ConContentTestPropsUpdate from "./ContentTestPropsUpdate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sstate: "khoi tao",
      sstate2: "khoi tao test props"
    };
  }

  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // return false;
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  updateState = () => {
    this.setState({ sstate: "trang thai duoc update" });
  };
  updateStateProps = () => {
    this.setState({ sstate: "trang thai duoc update props" });
  };

  render() {
    console.log("render, trạng thái:  => " + this.state.sstate);

    return (
      <div className="App">
        <ConContentTestPropsUpdate name={this.state.vb }/>
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          click update state
        </button>
        <button
          onClick={() => {
            this.updateStateProps();
          }}
        >
          click update props
        </button>
      </div>
    );
  }
}

export default App;
