import React, { Component } from "react";

class StorePicker extends Component {
  storeRef = React.createRef();
  goToStore = event => {
    event.preventDefault();
    var storeName = this.storeRef.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-picker" onSubmit={this.goToStore}>
        <input
          type="text"
          required
          placeholder="store name"
          ref={this.storeRef}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
