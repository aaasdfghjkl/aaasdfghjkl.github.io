import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sstate: 1 };
  }
  renderBtn = () => (
    <div className="row">
      <div className="btn btn-group">
        <div className="btn btn-info">Edit</div>
        <div className="btn btn-warning">Remove</div>
      </div>
    </div>
  );

  renderForm = () => (
    <div className="row">
      <div className="form-group">
        <input type="text" className="form-control" />
        <div className="btn btn-block btn-danger">Save</div>
      </div>
    </div>
  );

  displayCheck = () => {
    if (this.state.sstate === 0) {
      return this.renderBtn();
    } else {
      return this.renderForm();
    }
  };
  render() {
    return (
      <div className="App">
        <div>{this.displayCheck()}</div>
      </div>
    );
  }
}

export default App;
