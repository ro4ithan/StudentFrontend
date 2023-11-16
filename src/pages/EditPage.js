import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setParentName] = useState();
  const [parentContact, setParentContact] = useState();

  const obj1 = useParams();

  useEffect(() => {
    axios
      .get("https://studentbackend-ktba.onrender.com/students/update-student/" + obj1.id)
      .then((res) => {
        if (res.status === 200) {
          setfirstName(res.data.firstName);
          setlastName(res.data.lastName);
          setEmail(res.data.email);
          setContact(res.data.contact);
          setParentName(res.data.parentName);
          setParentContact(res.data.parentContact);
        }
      });
  }, [obj1.id]);

  const handleSubmit = (event) => {
    const newData = {
      firstName,
      lastName,
      email,
      contact,
      parentName,
      parentContact,
    };
    let url = "https://studentbackend-ktba.onrender.com/students/update-student/" + obj1.id;
    axios
      .put(url, newData)
      .then((res) => {
        if (res.status === 200) {
          alert("Record Updated");
        } else {
          alert("Something is worng");
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit} className="EditForm">
        <label for="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
          defaultValue={firstName}
        />
        <label for="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          onChange={(e) => {
            setlastName(e.target.value);
          }}
          defaultValue={lastName}
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          defaultValue={email}
        />
        <label for="contact">Contact</label>
        <input
          type="tel"
          id="contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          defaultValue={contact}
        />
        <label for="parentName">Parent Name</label>
        <input
          type="text"
          id="parentName"
          onChange={(e) => {
            setParentName(e.target.value);
          }}
          defaultValue={parentName}
        />
        <label for="parentContact">Parent Contact</label>
        <input
          type="tel"
          id="parentContact"
          onChange={(e) => {
            setParentContact(e.target.value);
          }}
          defaultValue={parentContact}
        />
        <input type="submit" id="submit" />
      </form>
    </Layout>
  );
}

export default EditPage;
