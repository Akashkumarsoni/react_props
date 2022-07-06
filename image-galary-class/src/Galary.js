import React from 'react'
import './App.css';
export const Galary = (props) => {
    
  return (
    <div className='App'>{
        props.finalarray.map((item) => <Images nameofimage={item.nameofimage}
        images = {item.images} 
        
        />)
        }</div>
  )
}



export const Images = (props) => {
    return (
      <div className="maindiv" >
            <img src={props.images}  alt=''/>
            <p className="heading">{props.nameofimage}</p>
          </div>
    )
  }
