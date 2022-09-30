import React from "react";
import "./styles.css";
import AnimLab from "./Components/AnimLab";

export default class App extends React.Component {
  reder(){ 
    return (
      <div className="App">
        <AnimLab/>
      </div>
    );
  }
}
