import React from "react";
import { useState } from "react";
import "./loginSignup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const empty = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setdata] = useState([]);
  const handleclick = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log(data);
  };

  // function for creating the Api data

  const createApi = async () => {
    if (data.email === "" || data.password === "") {
      alert("complete the form to signup");
    } else {
      let record = await fetch("http://127.0.0.1:5000/alpha/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      record = await record.json();
      if (record.message == "login successful") {
        sessionStorage.setItem("userEmail", record.match.email);
        sessionStorage.setItem("userPass", record.match.password);
        alert("login successful");
        navigate("/Products");
      } else {
        alert("username or password is invalid");
      }
      setdata(empty);
    }
  };

  return (
    <div>
      <section style={{ paddingTop: "20vh" }}>
        <div
          className="form-box"
          style={{
            display: "flex",
            background: "transparent",
            height: "90vh",
          }}
        >
          <div
            className="form-value from-control"
            style={{
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createApi();
              }}
            >
              <h2>Sign in</h2>
              <div className="inputbox">
                <i class="fa fa-envelope"></i>
                <input
                  value={data.email}
                  onChange={handleclick}
                  type="email"
                  name="email"
                />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <i class="fa fa-lock"></i>
                <input
                  value={data.password}
                  onChange={handleclick}
                  type="password"
                  name="password"
                />
                <label>Password</label>
              </div>
              <button>Sign in</button>
              <div className="sign">
                <p>
                  i don't have account!&nbsp;&nbsp;
                  <Link to="/Signup">sign up </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
