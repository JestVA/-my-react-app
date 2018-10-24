import './index.css'
import React from "react";
import ReactDOM from "react-dom";


function Hi() {
  return <div>{5+10}Hello <strong>Dorin!</strong>
  <h1>This is a React app!</h1>
  <ul>
    <li>Main benefit is</li> 
    <li>plenty</li>
  </ul>
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));