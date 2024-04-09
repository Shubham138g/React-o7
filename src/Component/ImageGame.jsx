import React, { useState, Fragment } from "react";
import { toast } from "react-toastify";

export default function ImageGame() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("Play");
  const handleInput = (e) => {
    setNumber(e.target.value);
  };
  const checkNumber = () => {
    if (number <= 1 || number > 5) {
      toast("number is not vaild");
    }
  };
  const URL = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
    "/image/5.jpg",
  ];

  return (
    <Fragment>
      <div className="container my-5">
        <h1>Enter Numeber</h1>
        <h4>{result}</h4>
        <input
          type="number"
          className="w-50"
          value={number}
          onChange={handleInput}
          min={2}
          max={5}
        />
        <button
          type="submit"
          onClick={checkNumber}
          className="ms-3 px-3 bg-dark text-light"
        >
          Enter
        </button>
        <div className="mt-2">
          <small className="text-danger">
            Please choose number between 2 to 5
          </small>
        </div>
        <div className="row">
          {URL.map((pic, index) => (
            <div className="col-3 my-5">
              <img width="250px" key={index} src={pic} alt={`Image ${index + 1}`} />
            </div>  
          ))}
        </div>
      </div>
    </Fragment>
  );
}
