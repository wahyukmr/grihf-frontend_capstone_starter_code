import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Login.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: name,
        email: email,
        password: password
      })
    });

    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);

      sessionStorage.setItem("email", email);
      navigate("/");
    //   window.location.reload();
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text1">
          Are you a new member?{" "}
          <span>
            <Link to="/signup" style={{ color: "#2190ff" }}>
              Signup Here
            </Link>
          </span>
        </div>

        <div className="login-form">
          <form onSubmit={login}>
            <div className="login-form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="login-form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                required
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="login-form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                required
              />
            </div>

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>

            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
}
