import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card
        name="Daniel Avacado"
        src="https://i.pinimg.com/564x/70/11/c4/7011c4d893c216538c94f6869c9812ea.jpg"
        no="76897987"
        email="dr3@gmail.com"
      />
      <Card
        name="Beyonce"
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        no="+123 456 789"
        email="b@beyonce.com"
      />
      <Card />
    </div>
  );
}

export default App;
