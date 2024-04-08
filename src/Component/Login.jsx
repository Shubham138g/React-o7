import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { ClimbingBoxLoader,BarLoader} from "react-spinners";
export default function Login() {
    const  [formData, setFormData] = useState({
        email:"",
        password:"",
    });
    const  [loder, setLoder] = useState(false);

    const getValue=(e)=>{
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value,
        });
    }
    const pass="abc";
    const email="123@gmail.com";
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoder(true);
        if(formData.email===email && formData.password===pass){
            setTimeout(() => {
                setLoder(false);
                navigate("/home");
                toast("You are logged in")
            }, 2000);
            console.log("successs");
        }
        else{
            console.log("not success")
            setTimeout(()=>{
                setLoder(false)
                toast("invaild user")
            },2000)
        }
    }

    const obj={
        display:"block",
        margin:"25vh auto"
    }   
  return (
    <Fragment>
        <BarLoader color="#09094f" speedMultiplier="2" size="25" cssOverride={obj} loading={loder}/>
      <div class="container my-5">
      <div className={loder==true?"d-none":""}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={getValue}
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={formData.password}
              onChange={getValue}
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-dark rounded-1">
            Submit
          </button>
        </form>
      </div>
      </div>
    </Fragment>
  );
}
