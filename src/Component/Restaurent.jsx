import React from "react";

export default function Restaurent(props) {
  return (
    <>
      <div className="container">
        <div className="card w-25 mb-5 mt-5">
          <img
            src={props.image}
            className="card-img-top"
            height={"200px"}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.cuisine}</p>
            <a href="/" className="btn btn-dark rounded-1">
              Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
