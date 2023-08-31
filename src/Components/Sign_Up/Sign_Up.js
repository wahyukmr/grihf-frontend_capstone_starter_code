import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Sign_Up.css";

export default function Signup() {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPhone, setPhone] = useState("");
  const [userPassword, setPassword] = useState("");
  const [showerr, setShowerr] = useState("");

  const navigate = useNavigate();

  const resetHandler = function () {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setShowerr("");
  };

  const register = async (e) => {
    e.preventDefault();

    // API Call
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
        phone: userPhone
      })
    });

    const json = await response.json();

    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", userName);
      // phone and email
      sessionStorage.setItem("phone", userPhone);
      sessionStorage.setItem("email", userEmail);
      // Redirect to home page
      navigate("/"); //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
      window.location.reload();
    } else {
      if (json.errors) {
        for (const error of json.errors) {
            console.log(error)
          setShowerr(error.msg);
        }
      } else {
        setShowerr(json.error);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-grid">
        <div className="signup-text">
          <h2>Sign Up</h2>
        </div>
        <div className="signup-text1" style={{ textAlign: "left" }}>
          Already a member?{" "}
          <span>
            <Link to="/login" style={{ color: "#2190ff" }}>
              Login
            </Link>
          </span>
        </div>
        <div className="signup-form">
          <form method="POST" onSubmit={register}>
            <div className="signup-form-group">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={userName}
                type="text"
                name="name"
                id="name"
                minLength="4"
                required
                className="signup-form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={userEmail}
                type="email"
                name="email"
                required
                id="email"
                className="signup-form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
              {showerr && (
                <div className="err" style={{ color: "red" }}>
                  {showerr}
                </div>
              )}
            </div>
            <div className="signup-form-group">
              <label htmlFor="phone">Phone</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={userPhone}
                type="tel"
                name="phone"
                id="phone"
                required
                minLength="10"
                maxLength="10"
                className="signup-form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={userPassword}
                name="password"
                type="password"
                id="password"
                minLength="8"
                required
                className="signup-form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                onClick={resetHandler}
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
