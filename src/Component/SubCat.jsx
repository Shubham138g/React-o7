import axios from "axios";
import React, { useState, useEffect } from "react";

export default function SubCat() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [data, setData] = useState([]);
  const [Subdata, setSubData] = useState([]);
  const [catId, setcatId] = useState("");
  const [SubcatId, setSubcatId] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(catId);
    let data = {
      name: name,
      price: price,
      cat:catId,
      SubcatId:SubcatId
    };
  };
  //Category
  useEffect(() => {
    axios
      .post("https://kizaapi.ksesystem.com/api/category/all")
      .then((response) => {
        // console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // sub category
  useEffect(() => {
    axios
      .post("https://kizaapi.ksesystem.com/api/subcategory/all")
      .then((response) => {
        console.log(response.data.data);
        setSubData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Price:</label>
        <input
          type="text"
          value={ price }
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Category ID:</label>
        <select
          name=""
          id=""
          value={catId}
          onChange={(e) => {
            setcatId(e.target.value);
          }}
        >
          <option value="" selected>
            Choose{" "}
          </option>
          {data.map((el, index) => (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <br />
        <label htmlFor="">Sub Category ID:</label>
        <select
          name=""
          id=""
          value={SubcatId}
          onChange={(e) => {
            setSubcatId(e.target.value);
          }}
        >
          <option value="" selected>
            Choose{" "}
          </option>
          {Subdata.map((el, index) => (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          ))}
        </select>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
