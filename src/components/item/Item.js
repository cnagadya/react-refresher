import React, { Component } from "react";

export default class Item extends Component {
  handleClick = () => {
    this.props.purchase(this.props.details.name);
  };
  render() {
    const {
      name,
      price,
      description,
      availability,
      image,
      option
    } = this.props.details;
    return (
      <li className="Item">
        <h3>{name}</h3>
        <p>{price}</p>
        <img src={image} alt={name} />
        {description}
        {option}
        <button
          disabled={!availability}
          onClick={() => {this.props.purchase(name)}}>
          {availability ? "Purchase" : "Not Available"}
        </button>
      </li>
    );
  }
}
