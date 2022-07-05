import React from "react";

const Calci = (props) => {

  if (props.operator === "+")
    return (
      <div>
        <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
          <h1>{props.num1}</h1>
          <h1>+</h1> 
          <h1>{props.num2}</h1>
        </div>
        <h1>= {props.num1 + props.num2}</h1>
      </div>
    );
  if (props.operator === "-")
    return (
      <div>
        <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
          <h1>{props.num1}</h1>
          <h1>-</h1> 
          <h1>{props.num2}</h1>
        </div>
        <h1>= {props.num1 - props.num2}</h1>
      </div>
    );
    if (props.operator === "*")
    return (
      <div>
        <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
          <h1>{props.num1}</h1>
          <h1>*</h1> 
          <h1>{props.num2}</h1>
        </div>
        <h1>= {props.num1 * props.num2}</h1>
      </div>
    );
    if (props.operator === "/")
    return (
      <div>
        <div style={{display:"flex",width:"120px",justifyContent:"space-between"}}>
          <h1>{props.num1}</h1>
          <h1>/</h1> 
          <h1>{props.num2}</h1>
        </div>
        <h1>= {props.num1 / props.num2}</h1>
      </div>
    );
};
export default Calci;
