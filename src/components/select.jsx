import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <div>
        <p>Choose a category:</p>
        <select name="selectCategory" />
        <button type="button">Get Quote</button>
      </div>
    );
  }
}

export default Select;
