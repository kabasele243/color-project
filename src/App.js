import React, { Component } from "react";

import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div className="App">
        <Palette {...seedColors[5]} />
      </div>
    );
  }
}

export default App;
