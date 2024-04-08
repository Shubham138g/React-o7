import React, { Fragment } from "react";
import "../App.css";

export default function RestaurestData() {
  let resData = [
    {
      name: "Radisons",
      cusin: "Indian",
      rating: "4.3",
      address: "Model Town,near Guru nanak mission chowk",
      image:
        "https://imgs.search.brave.com/sNMr1aYoN6mGCI6MlmhRcAc1JUIgsIZ7ZM46BzVAGec/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTA4NjYz/MTAvNjU4MjkvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NTgyOTQ4/Mjgtc3RvY2stcGhv/dG8tdHJhZGl0aW9u/YWwtaW5kaWFuLWN1/aXNpbmUtYXNzb3J0/ZWQtaW5kaWFuLmpw/Zw",
    },
    {
      name: "Fortune",
      cusin: "Thai",
      rating: "4.6",
      address: "Model Town,near Guru nanak mission chowk",
      image:
        "https://imgs.search.brave.com/DJDn8JMkwpWD39JWHFLLjJTJMcw4djMAVpFYWFF8Zos/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3LzYy/LzIwLzI3NjIyMDIz/Nzg2OTFlNGM1NGRl/NGJmYTdlNDkwNjY1/LmpwZw",
    },
    {
      name: "Ramada",
      cusin: "Chinese",
      rating: "3.6",
      address: "Model Town,near Guru nanak mission chowk",
      image:
        "https://imgs.search.brave.com/wfGcn5ykN2Zk0hrlfLD7qGUhZ38QgUtewFA4CbkEKdw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzI5LzI0LzE0/LzM2MF9GXzEyOTI0/MTQyOV9BRHhVZlBv/c2dYUmxuNnJXUVVL/b0ZCZGJuZVk2QzMy/RC5qcGc",
    },
    {
      name: "President Hotel",
      cusin: "South Indian",
      rating: "4.7",
      address: "Near ABSSV School,near Guru nanak mission chowk",
      image:
        "https://imgs.search.brave.com/lhDWQrAZM_UwjyNQuTdQExPoYPX7cid20fkXaspP4xY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/MjY4NDIxMC9waG90/by9zb3V0aC1pbmRp/YW4tYnJlYWtmYXN0/LWRvc2EuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVA3ZTBT/YzVwQzFRbkxCVXFR/RmNJTFo1dTZPcFFp/LTFRdTJYdWNFTGdK/S3M9",
    },
    {
      name: "Sk Hotel",
      cusin: "Spanish",
      rating: "3-9",
      address: "Delux Mall,near Guru nanak mission chowk",
      image:
        "https://imgs.search.brave.com/Fc5IRj0onXsOy9KeZeiOsPaywfFX7q9DyTnmvozklVg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJjLzc0/Lzg4LzJjNzQ4ODdl/YzNiZWFkODY3ZGMz/OGIzZTNmMWZmMThj/LmpwZw",
    },
  ];
  return (
    <>
      {resData.map((data, index) => {
        return (
          <Fragment key={index}>
            <div className="col-4 mb-5" >
              <div className="card">
                <img
                  src={data.image}
                  className="card-img-top resImg"
                  alt="..."
                  
                />
                <div className="card-body">
                  <h4 className="card-text">{data.name}</h4>
                  <h5 className="card-text">
                    Cuisines: <span>{data.cusin}</span>
                  </h5>
                  <h5>
                    Rating:<span>{data.rating}</span>
                  </h5>
                  <h5>
                    Address:<span>{data.address}</span>
                  </h5>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
