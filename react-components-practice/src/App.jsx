import React from "react";
import Heading from "./Heading";
import PIE, { doublePie } from "./must_read";
//the function_name inside curly braces must be identical to
//the original function name
//to import all functions at once:
//import * as po from "./must_read"

function App() {
  return (
    <div>
      <Heading />
      <p>
        PI: {PIE} and DP: {doublePie()}
      </p>
    </div>
  );
}

export default App;
