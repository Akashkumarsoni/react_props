import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("0");

  const [num2, setNum2] = useState("0");

  const [res, setRes] = useState("");



  const handleUpClick = () => {
    var s = parseInt(num1) + parseInt(num2);
    setRes(s);
  };

  const handleOnChangeNum1 = (event) => {
    return setNum1(event.target.value);
  };

  const handleOnChangeNum2 = (event) => {
    return setNum2(event.target.value);
  };

  return (
    <>
      <div className="py-5 px-5">
        <h2 className="m-5">My Calculator using State</h2>
        <div className="mb-3">
          <input
            type="number"
            className="form-control m-5"
            id="firstnum"
            aria-describedby="emailHelp"
            value={num1}
            onChange={handleOnChangeNum1}
          />
          <input
            type="number"
            className="form-control m-5"
            id="lastnum"
            aria-describedby="emailHelp"
            value={num2}
            onChange={handleOnChangeNum2}
          />
          <button className="btn btn-primary m-5" onClick={handleUpClick}>
            Solve
          </button>
        </div>

        <input
            type="number"
            className="form-control m-5"
            id="lastnum"
            value={res}
            onChange={handleOnChangeNum2}
          />
      </div>
    </>
  );
};

export default App;
