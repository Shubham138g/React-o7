import React, { useState } from "react";
import { Fragment } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [contact, setcontact] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState(false);
  // rKcrnEDZgystYwLn
  
  const changeStatus=()=>{
    if(status==false){
      setstatus(true);
    }
    else{
      setstatus(false)
    }
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  aria-describedby="emailHelp"
                />
              </div>
              <h1>{name}</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  className="form-control"
                  id="email"
                />
              </div>
              <h1>{email}</h1>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                  className="form-control"
                  id="pass"
                />
              </div>
              <h1>{pass}</h1>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    setcontact(e.target.value);
                  }}
                  className="form-control"
                  id="contact"
                />
              </div>
              <h1>{contact}</h1>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                  className="form-control"
                  id="address"
                />
              </div>
              <h1>{address}</h1>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <select
                  class="form-select"
                  value={city}
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option selected>Choose City</option>
                  <option value="Jaladhar">Jaladhar</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Ludhiana">Ludhiana</option>
                </select>
              </div>
              <h1>{city}</h1>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  value={state}
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                  aria-label="Default select example"
                >
                  <option selected>Choose State</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bihaar">Bihaar</option>
                </select>
              </div>
              <h1>{state}</h1>
            </form>
          </div>
          <div className="col-6">
            <form>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  Gender
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="male"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="female"
                    onChange={(e) => {
                      setgender(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
                <h1>{gender}</h1>
              </div>
              <div className="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={status.toString()}
                    onClick={changeStatus}
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">Is term & condition is accepted {status.toString()}</label>
                </div>
              </div>
              <h1></h1>
              <button type="submit" className="btn btn-dark rounded-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
