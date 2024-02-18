// LoginSignupPage.js

import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
const Login = ({ setOpenLogIn }) => {
  const [signup, setSignUp] = useState(false);
  const [login, setLogIn] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPasswordn] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenLogIn(false);
    console.log("hiii");
    let formData = {
      email: email,
      password: password,
      appType: "quora",
    };
    let data = JSON.stringify(formData);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://academics.newtonschool.co/api/v1/user/login",
      headers: {
        "Content-Type": "application/json",
        projectID: "nnd8lcol1rly",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <div className="container">
        <h2>Login or Sign Up</h2>
        {login && (
          <>
            <div className="form-group">
              <label htmlFor="UserEmail">UserEmail:</label>
              <input
                type="text"
                id="UserEmail"
                name="UserEmail"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => setPasswordn(e.target.value)}
                value={password}
              />
            </div>
            <div className="form-group">
              <button onClick={handleSubmit}>Login</button>
              <button
                onClick={() => {
                  setSignUp(true);
                  setLogIn(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </>
        )}
      </div>
      {signup && (
        <SignupForm
          setSignUp={setSignUp}
          setLogIn={setLogIn}
          setOpenLogIn={setOpenLogIn}
        />
      )}
    </div>
  );
};

const SignupForm = ({ setSignUp, setLogIn, setOpenLogIn }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   appType: "quora",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Add your form submission logic here

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenLogIn(false);
    const formData = {
      name: name,
      email: email,
      password: password,
      appType: "quora",
    };
    let data = JSON.stringify(formData);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://academics.newtonschool.co/api/v1/user/signup",
      headers: {
        "Content-Type": "application/json",
        projectID: "nnd8lcol1rly",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button
            onClick={() => {
              setSignUp(false);
              setLogIn(true);
            }}
          >
            Login
          </button>
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
