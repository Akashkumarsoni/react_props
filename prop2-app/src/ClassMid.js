import React from "react";

export class ClassMid extends React.Component {
  
    render() {
      return (
        <div className="App@@">
           <p>{this.props.name2}</p>
          <h1>{this.props.children}</h1>
        
        </div>
      );
    }
  }