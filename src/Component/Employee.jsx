import React from 'react';
import EmployeeForm from './EmployeeForm';

export default function Employee() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Salary</th>

          </tr>
        </thead>
        <tbody>
          <EmployeeForm sn={"1"} name={"Shubham"} deg={"MIS Executive"} salary={"20000"} />
          <EmployeeForm sn={"2"} name={"Kundan"} deg={"Web Developer"} salary={"120000"} />
          <EmployeeForm sn={"3"} name={"Radha"} deg={"MERN Developer"} salary={"12000"} />
          <EmployeeForm sn={"4"} name={"Divya"} deg={"LAMP Developer"} salary={"120000"} />
          <EmployeeForm sn={"5"} name={"Sonali"} deg={"Full Stack Developer"} salary={"1230000"} />
          <EmployeeForm sn={"6"} name={"Arun"} deg={"Web Developer"} salary={"120000"} />
        </tbody>
      </table>
    </>
  );
}
