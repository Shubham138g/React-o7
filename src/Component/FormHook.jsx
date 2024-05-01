import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function FormHook() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  //   const handleForm = (data) => {
  //     console.log(data);
  //     try {
  //         axios.post("http://localhost:3000/form", data);
  //         res.status(200).json("api is running successfull", data);
  //       } catch (error) {
  //         res.status(400).json({ message: error.message });
  //       }
  //   };
  const handleForm = (data) => {
    console.log(data);
    toast.success("data added successfully");
  };

  const handleError = (errors) => {
    console.log(errors);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleForm, handleError)}>
        <label htmlFor="">Name:</label>
        <input {...register("firstname",{required:true,maxLength:10})} />
        {errors.firstname && errors.firstname?.type=="required"?<span className="text-danger"> *This is required</span>:""}
        {errors.firstname && errors.firstname?.type=="maxLength"?<span className="text-danger">*Name Should be lesss then 10 character</span>:""}
        <br />
        <label htmlFor="">email:</label>
        <input type="email" {...register("email",{required:true})} />
        {errors.email && errors.email?.type=="required"?<span className="text-danger"> *This is required</span>:""}
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" {...register("password",{required:true,maxLength:10})} />
        {errors.password && errors.password?.type=="required"?<span className="text-danger"> *This is required</span>:""}
        {errors.password && errors.password?.type=="maxLength"?<span className="text-danger">*Password Should be lesss then 10 character</span>:""}
        <br />
        <label htmlFor="">Phone:</label>
        <input {...register("phone",{required:true,maxLength:10})} />
        {errors.phone && errors.phone?.type=="required"?<span className="text-danger"> *This is required</span>:""}
        {errors.phone && errors.phone?.type=="maxLength"?<span className="text-danger">*Phone Should be 10 character</span>:""}
        <br />
        <button>submit</button>
      </form>
    </>
  );
}
