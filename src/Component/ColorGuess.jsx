import React,{ useState } from 'react';
import '../style.css';

export default function ColorGuess() {
     const [color, setColor] = useState("Play");
     const [backgroundColor, setBackgroundColor] = useState("");
     const  checkColor=(e)=>{
      console.log(e);
        var val=e.target.dataset.value;
        if(val=="red"){
            setColor("you win");
            setBackgroundColor("green");
        }
        else{
            setColor("you lose");
            setBackgroundColor("red");
        }
     }
    const box1={width:"200px",height:"50px",backgroundColor:"green"};
  return (
    <>
    <div className="result" style={{backgroundColor}}>
    <p>{color}</p>
    </div>
    <div className="cont">
     <div className='mainBox' data-value="red" style={{width:"200px",height:"50px",backgroundColor:"red"}}></div> 
    </div>
     <div className="container">
     <div className="box" onClick={checkColor}  data-value="green" style={box1} id="box-1"></div>
     <div className="box"  onClick={checkColor} data-value="yellow" id="box-2"></div>
     <div className="box"  onClick={checkColor} data-value="blue" id="box-3"></div>
     <div className="box"  onClick={checkColor} data-value="red" id="box-4"></div>
     <div className="box"  onClick={checkColor} data-value="orange" id="box-5"></div>
     </div>

    </>
  );
}
