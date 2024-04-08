import React, { Fragment } from 'react';

export default function Movie() {
  
function RatingStars({ rating,className }) {
  // const stars = '🌟'.repeat(parseInt(rating)); // Generate stars based on rating
  const stars = '*'.repeat(parseInt(rating)); // Generate stars based on rating

  return <span className={className}>{stars }</span>;
}

// if(movie.rating=="1"){

// }
    const movie=
        [
            { name: "surveer", director: "Vijay Sinha", language: "Hindi", rating: "1" },
            { name: "Article 370", director: "Mannu Maharaj", language: "Hindi", rating: "2" },
            { name: "Gyanni", director: "Manoj karmath", language: "Tamil", rating: "3" },
            { name: "BalakNath", director: "Smriti Irani", language: "Bhojpuri", rating: "5" },
            { name: "Yodha", director: "Rajnath Singh", language: "English", rating: "4" }
          ];
  return (
    <Fragment>
      
      {movie.map((el,index)=>{
         return(
          <table border={1} key={index}>
          <tbody >
         <tr className='tr' >
          <td className='td'>{el.name}</td>
          <td className='td'>{el.director}</td>
          <td className='td'>{el.language}</td>
          <td className='td rating'>
                <RatingStars rating={el.rating} className={parseInt(el.rating)===1?"red":parseInt(el.rating)===2?"blue":parseInt(el.rating)===3?"blue":parseInt(el.rating)===4?"star":"green"}  />
              </td>
          </tr>
          </tbody>
          </table>
       )})
      
       
      }
    </Fragment>
  );
}
