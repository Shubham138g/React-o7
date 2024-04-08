import React from "react";

export default function EmployeeForm(props) {
  return (
    <>
      
          <tr>
            <td scope="row">{props.sn}</td>
            <td>{props.name}</td>
            <td>{props.deg}</td>
            <td>{props.salary}</td>
          </tr>
       
    </>
  );
}
