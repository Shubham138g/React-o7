import React, { useState, Fragment } from "react";
import { toast } from "react-toastify";

export default function ImageGame() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("Play");
  const [rNum, setRNUm] = useState(null);


  const handleInput = (e) => {
    setNumber(e.target.value);
  };
  // const checkNumber = () => {
    if (number <= 1 || number > 5) {
      toast("number is not vaild");
    }
  // };
  const URL = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
    "/image/5.jpg",
  ];
  
  
  function gen(){
    let randNum = Math.floor((Math.random() * 5) + 1)
    setRNUm(randNum);
    console.log(rNum);
  }

const checkImg=(index)=>{
  if(index==rNum-1){
    toast("You win");
  }
  else{
    toast("You Lose");
  }
}    

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
          onKeyDownCapture={gen}
        />
  
        <div className="mt-2">
          <small className="text-danger">
            Please choose number between 2 to 5
          </small>
        </div>
 
        
         <div className="row" >
          {rNum !== null && (
            <div className="col-12 text-center my-5">
              <img width="250px" id="mainImg" src={URL[rNum - 1]}/>
            </div>
          )}
        </div>
        <div className="row">
          {number >= 2 && URL.slice(0, number).map((pic, index) => (
            <div className="col-3 my-5">
              <img width="250px" id={index} onClick={()=>{checkImg(index)}} key={index} src={pic} alt={`Image ${index + 1}`} />
            </div>  
          ))}
        </div>
      </div>
    </Fragment>
  );
}
