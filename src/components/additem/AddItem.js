import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    name: "",
    price: "",
    availability: true,
    option: "",
    description: "",
    image: ""
  };
  addItem = event => {
    event.preventDefault();
    this.props.addItem(this.state);
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    } //, () => console.log(this.state)
  )};
  render() {
    return (
      <form className="add-item" onSubmit={this.addItem}>
        <h2 className="add-item-form">Add Item</h2>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          onChange={this.handleChange}
        />
        <input
          name="availability"
          type="checkbox"
          checked={this.state.availability}
          onChange={this.handleChange}
        />

        <select
          multiple={true}
          value={this.state.value}
          onChange={this.handleChange}
          name="option"
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          onChange={this.handleChange}
        />
        <input
          name="image"
          type="file"
          onChange={this.handleChange}
        />
        <button type="submit">+Add</button>
      </form>
    );
  }
}
