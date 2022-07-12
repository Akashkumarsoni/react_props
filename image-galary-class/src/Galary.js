import './App.css';

import React, { Component } from 'react'

export class Galary extends Component {
  render() {
   
      return (
        <div className='App'>{
            this.props.finalarray.map((item) => <Images nameofimage={item.nameofimage}
            images = {item.images} 
            
            />)
            }</div>
      )
    
  }
}





export class Images extends Component {
  render() {
    return (
      <div className="maindiv" >
            <img className='imgs' src={this.props.images}  alt=''/>
            <p className="heading">{this.props.nameofimage}</p>
          </div>
    )
  }
}

