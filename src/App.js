import React from "react";
import Quote from "./components/quote";
import Select from "./components/select";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Chuck Quotes</h1>
      <Quote />
      <Select />
    </div>
  );
}


export default App;
