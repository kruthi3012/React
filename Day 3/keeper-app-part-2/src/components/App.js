import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((stuff) => (
        <Note key={stuff.key} title={stuff.title} content={stuff.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
