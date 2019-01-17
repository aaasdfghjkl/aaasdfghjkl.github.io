import React, { Component } from "react";

class ConContentTestPropsUpdate extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps props" + nextProps.name);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate props");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate props");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate props");
  }

  render() {
    return (
      <div>
        <h4>Xin chào {this.props.name}</h4>
      </div>
    );
  }
}

export default ConContentTestPropsUpdate;
