import React, { useState } from "react";
import Layout from "../components/Layout";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../asserts/image2.jpg";
import axios from "axios";

function SignUp() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setparentName] = useState();
  const [parentContact, setparentContact] = useState();

  const studentObj = {
    firstName,
    lastName,
    email,
    contact,
    parentName,
    parentContact,
  };
  let handleSubmit = (event) => {
    const url = "https://studentbackend-ktba.onrender.com/students/create-student";
    axios
      .post(url, studentObj)
      .then((res) => {
        if (res.status === 200) {
          alert("student added successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };

  return (
    <div>
      <Layout>
        <h1>Enquiry Registration Form</h1>
        <Container>
          <Row>
            <Col>
              <img src={Image} />
            </Col>
            <Col>
              <form onSubmit={handleSubmit}>
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                />
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label for="contact">Contact</label>
                <input
                  type="tel"
                  id="contact"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
                <label for="parentName">Parent Name</label>
                <input
                  type="text"
                  id="parentName"
                  onChange={(e) => {
                    setparentName(e.target.value);
                  }}
                />
                <label for="parentContact">Parent Contact</label>
                <input
                  type="tel"
                  id="parentContact"
                  onChange={(e) => {
                    setparentContact(e.target.value);
                  }}
                />
                <input type="submit" id="submit" />
              </form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default SignUp;
