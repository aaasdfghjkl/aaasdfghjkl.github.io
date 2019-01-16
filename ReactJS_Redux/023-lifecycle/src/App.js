import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sstate: "khoi tao"
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

  render() {
    console.log("render, trạng thái:  => " + this.state.sstate);

    return (
      <div className="App">
        <button
          onClick={() => {
            this.updateState();
          }}
        >
          click update state
        </button>
      </div>
    );
  }
}

export default App;
