import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();
  const handleSubmit = () => {
    const url = "https://studentbackend-ktba.onrender.com/students/login";
    const loginObj = { email };
    axios
      .post(url, loginObj)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email ID</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </Layout>
  );
}

export default Login;