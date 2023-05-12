import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Headers from "../headerfooter/Headers";
import Home from "../Projectwork/Home";
import Footers from "../headerfooter/Footers";
import Signin from "../Projectwork/Login";
import Signup from "../Projectwork/Signup";
import Products from "../Projectwork/Products";
import Addproduct from "../Projectwork/Addproduct";
import Updata from "../Projectwork/Updata";

function Routers() {
  const empty = {
    // id: '',
    name: "",
    email: "",
    city: "",
  };

  //state for handling input
  const [handle, setHandle] = useState(empty);
  const [handle2, setHandle2] = useState(empty);
  const [userid, setid] = useState();

  // function for handle the input fields
  const handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const handler2 = (e) => {
    const { name, value } = e.target;
    setHandle2({ ...handle, [name]: value });
    console.log(handle2);
  };

  // function for creating the Api data
  const createApi = () => {
    fetch("http://localhost:8000/create", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
    setHandle(empty);
  };

  const edit = async (id) => {
    // console.log(id);
    var data = await fetch(`http://localhost:8000/show/${id}`);
    data = await data.json();
    console.log(data);
    setHandle2(data);
    setid(id);
  };
  const updatee = async () => {
    fetch(`http://localhost:8000/update/${userid}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(handle),
    });
  };

  return (
    <div>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Updata/:id" element={<Updata />} />
        </Routes>

        <Footers />
      </Router>
    </div>
  );
}

export default Routers;
