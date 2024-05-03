import React from "react";

export default function Tourist() {
    let tourristPlace=["Red Fort","Taj Mahal","Ram Mandir","Time Square","Lodon Bridge"];

  return (
    <>
    {tourristPlace.map((data,index)=>{
        return(
            <>
            <div className="col-3" key={index}>
            <div className="card " >
        <img src={"https://imgs.search.brave.com/pMJs9tjGuKE1ZPgJ-xNW8wfqG3qM59A0EH0G2xiWWH4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/Ny8zMS8yMi81MC9w/aG90b2dyYXBoZXIt/NDA3MDY4XzY0MC5q/cGc"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
            </div>
            </>   
        )
    })}   
    </>
  );
}
