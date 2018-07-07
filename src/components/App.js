import React, { Component } from "react";
import { Header } from "./header/Header";
import Inventory from "./inventory/Inventory";
import Order from "./order/Order";
import Item from "./item/Item";

class App extends Component {
  state = {
    itemHolder: {},
    basket: {}
  };
  addItem = item => {
    const items = { ...this.state.itemHolder };
    items[Date.now()] = item;
    this.setState({
      itemHolder: items
    });
  };
  viewItems = () => {
    // use it to load external data to state
    // this.setState({
    //   itemHolder: external-data
    // })
  };
  purchase = basketItem => {
    const basketItems = { ...this.state.basket };
    basketItems[basketItem] = basketItems[basketItem] + 1 || 1;
    this.setState({
      basket: basketItems
    });
  };

  render() {
    return (
      <div className="app">
        <div className="">
          <Header tagline="Issa wrap" />
          <ul>
            {Object.values(this.state.itemHolder).map(item => (
              <Item details={item} key={item.name} purchase={this.purchase} />
            ))}
          </ul>
        </div>
        <Inventory addItem={this.addItem} viewItems={this.viewItems} />
        <Order basket={this.state.basket}/>
      </div>
    );
  }
}

export default App;
