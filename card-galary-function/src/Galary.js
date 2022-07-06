import React from 'react'
import './App.css';
export const Galary = (props) => {
    
  return (
    <div className='App'>{
        props.finalarray.map((item) => <Card heading={item.heading}
        subhead = {item.subhead} 
        colors = {item.colors}
        para = {item.para}
        />)
        }</div>
  )
}



export const Card = (props) => {
    return (
      <div className="maindiv" style={{backgroundColor:props.colors}}>
            <p className="heading">{props.heading}</p>
            <hr />
            <p className="heading2">{props.subhead}</p>
            <p className='paras'>{props.para}</p>
          </div>
    )
  }
