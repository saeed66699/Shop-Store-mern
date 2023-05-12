import React from "react";
import { useState } from "react";
import "./loginSignup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
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
    if (data.name === "" || data.email === "" || data.password === "") {
      alert("complete the form to signup");
    } else {
      let record = await fetch("http://127.0.0.1:5000/alpha/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      record = await record.json();
      if (record == "email already exist") {
        alert("email already exist");
      } else {
        alert("sign up successful");
        navigate("/Signin");
      }
      setdata(empty);
    }
  };

  return (
    <div>
      {/* style={{ margin: "14vh 8vh 14vh 8vh" }} */}
      <section style={{ paddingTop: "20vh" }}>
        <div className="form-box " style={{ height: "90vh" }}>
          <div className="form-value from-control">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createApi();
              }}
            >
              <h2>Sign Up</h2>
              <div className="inputbox">
                <i class="fa fa-user"></i>
                <input
                  value={data.name}
                  onChange={handleclick}
                  type="text"
                  name="name"
                />
                <label>Name</label>
              </div>

              <div className="inputbox">
                <i className="fa fa-envelope"></i>
                <input
                  value={data.email}
                  onChange={handleclick}
                  type="email"
                  name="email"
                />
                <label>Email</label>
              </div>
              <div className="inputbox">
                <i className="fa fa-lock"></i>
                <input
                  value={data.password}
                  onChange={handleclick}
                  type="password"
                  name="password"
                />
                <label>Password</label>
              </div>
              <button>Sign up</button>
              <div className="sign">
                <p>
                  i have account&nbsp;&nbsp;<Link to="/Signin">sign in </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
