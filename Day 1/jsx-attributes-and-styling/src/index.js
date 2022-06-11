//use camelcase for html attributes like className, contentEditable,etc
//camelcase is in JSX
//render this script as type: text/JSX from the html file

import React from "react";
import ReactDOM from "react-dom";

const addr = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="pasta" contentEditable="true" spellCheck="false">
      this is my list
    </h1>
    <ul>
      <li>
        CLOWNFISH
        <br />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg"
          alt="nemo"
        ></img>
      </li>
      <li>
        ROYAL BLUE TANG
        <br />
        <img
          src="https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP.jpg"
          alt="dory"
        ></img>
      </li>
    </ul>
    <p>Using LOREM PICSUM for placeholder images</p>
    <img src={addr + "?grayscale"} alt="random" />
  </div>,
  document.getElementById("root")
);
