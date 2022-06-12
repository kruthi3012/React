import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(okay) {
  return (
    <Entry
      key={okay.id}
      emoji={okay.emoji}
      name={okay.name}
      meaning={okay.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
