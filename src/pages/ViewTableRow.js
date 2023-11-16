import React from "react";
import ViewStyles from "../components/ViewStyles.css";
import { Link } from "react-router-dom";


function ViewTableRow(props) {
  return (
    <tr>
      <td>{props.obj.firstName}</td>
      <td>{props.obj.lastName}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.contact}</td>
      <td>{props.obj.parentName}</td>
      <td>{props.obj.parentContact}</td>
      <td>
        <Link to={`/edit-student/${props.obj._id}`}>
          <button>Edit</button>
        </Link>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;
