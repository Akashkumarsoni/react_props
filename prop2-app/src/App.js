import "./App.css";
import React from "react";
import { ClassMid } from "./ClassMid";
import { ClassLast } from "./ClassLast";

export class ClassTop extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Top class {this.props.username}</h1>
        <ClassMid name2="Middle class">
        
          <ClassLast />
        </ClassMid>
      </div>
    );
  }
}





