import React, { Component } from "react";
import { Header } from "./header/Header";
import Inventory from "./inventory/Inventory";
import Order from "./order/Order";

class App extends Component {
  state = {
    itemHolder: {}
  };
  addItem = item => {
    console.log("Adding",item)
  };

  render() {
    return (
      <div className="app">
        <div className="">
          <Header tagline="Issa wrap" />
        </div>
        <Inventory addItem={this.addItem} />
        <Order />
      </div>
    );
  }
}

export default App;
