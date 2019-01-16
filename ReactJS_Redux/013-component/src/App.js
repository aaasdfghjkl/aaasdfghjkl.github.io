import React, { Component } from "react";
import TopMenu from "./Components/TopMenu";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Header />
        <Content
          classNameImg="col-lg-6 order-lg-2"
          classNameText="col-lg-6 order-lg-1"
          srcImg="img/01.jpg"
        />
        <Content
          classNameImg="col-lg-6"
          classNameText="col-lg-6"
          srcImg="img/02.jpg"
        />
        <Content
          classNameImg="col-lg-6 order-lg-2"
          classNameText="col-lg-6 order-lg-1"
          srcImg="img/03.jpg"
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
