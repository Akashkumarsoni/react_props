import React, { Component } from 'react'

export default class Calci extends Component {
  render() 
    {
        if (this.props.operator === "+")
          return (
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
                <h1>{this.props.num1}</h1>
                <h1>+</h1> 
                <h1>{this.props.num2}</h1>
              </div>
              <h1>&nbsp;= {this.props.num1 + this.props.num2}</h1>
            </div>
          );
        if (this.props.operator === "-")
          return (
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
                <h1>{this.props.num1}</h1>
                <h1>-</h1> 
                <h1>{this.props.num2}</h1>
              </div>
              <h1> &nbsp;= {this.props.num1 - this.props.num2}</h1>
            </div>
          );
          if (this.props.operator === "*")
          return (
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
                <h1>{this.props.num1}</h1>
                <h1>*</h1> 
                <h1>{this.props.num2}</h1>
              </div>
              <h1> &nbsp;= {this.props.num1 * this.props.num2}</h1>
            </div>
          );
          if (this.props.operator === "/")
          return (
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
                <h1>{this.props.num1}</h1>
                <h1>/</h1> 
                <h1>{this.props.num2}</h1>
              </div>
              <h1>&nbsp;= {this.props.num1 / this.props.num2}</h1>
            </div>
          )
      }
    }

