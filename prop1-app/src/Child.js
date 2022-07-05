
import './App.css';
import React from 'react';
class Child extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello {this.props.name}</h1>
        </header>
      </div>
    );
  }
}

export default Child;
