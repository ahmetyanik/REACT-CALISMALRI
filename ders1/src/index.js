import React from "react";
import ReactDOM from "react-dom";


var isim = "Ahmet";
var soyisim= "Yanik";

ReactDOM.render(
  <div>
    <h1 style={{color:"red"}}>Hello</h1>
    <ul>
      <li>Selamlar</li>
      <li>Merhabalar {isim+" "+soyisim}</li>
    </ul>
  </div>,
  document.getElementById("root")
);

