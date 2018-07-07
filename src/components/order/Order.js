import React, { Component } from "react";

export default class Order extends Component {
  render() {
    return (
      <div className="order">
        <h3>Shopping basket</h3>
        <div>
          {Object.entries(this.props.basket)}
        </div>
      </div>
    );
  }
}
