import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";

function ViewTable() {
  const [students, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("https://studentbackend-ktba.onrender.com/students")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableItems = ()=>{
    return students.map((student, i)=>{
        return <ViewTableRow obj = {student} key= {i} />;
    });
  }
  return (
    <Layout>
      {/* {TableItems()} */}
      <h1>View data pages</h1>
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Parent Name</th>
          <th>Parent Contact</th>
          <th>options</th>
        </thead>
        <tbody>{TableItems()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewTable;
