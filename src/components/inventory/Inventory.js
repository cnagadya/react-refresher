import React, { Component } from "react";
import AddItem from "../additem/AddItem";

export default class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddItem addItem={this.props.addItem} />
        {/* <button onClick={this.props.viewItems}>View Items</button> */}
      </div>
    );
  }
}
