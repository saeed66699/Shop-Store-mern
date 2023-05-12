import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginSignup.css";

function Addproduct() {
  const empty = {
    title: "",
    price: "",
    description: "",
  };

  const [data, setdata] = useState([]);
  const handleclick = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log(data);
  };

  // function for creating the Api data

  const createApi = async () => {
    if (data.title === "" || data.email === "" || data.description === "") {
      alert("complete the form to add products");
    } else {
      let record = await fetch("http://127.0.0.1:5000/alpha/create", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      record = await record.json();
      alert("product add successfully");
      setdata(empty);
    }
  };
  const [product, setproduct] = useState([]);
  const fetchh = async () => {
    var dt = await fetch("http://localhost:5000/alpha/read");
    dt = await dt.json();
    setproduct(dt);
  };

  const del_data = async (id) => {
    let a = await fetch(`http://127.0.0.1:5000/alpha/delete/${id}`, {
      method: "DELETE",
    });
    data = await a.json();
  };

  useEffect(() => {
    fetchh();
  }, [del_data]);

  return (
    <div style={{ paddingTop: "20vh" }}>
      {/* style={{ margin: "14vh 8vh 14vh 8vh" }} */}
      <section>
        <div className="form-box " style={{ height: "70vh" }}>
          <div className="form-value from-control">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createApi();
              }}
            >
              <h2>Addproducts</h2>
              <div className="inputbox">
                <input
                  value={data.title}
                  onChange={handleclick}
                  type="text"
                  name="title"
                />
                <label>Title</label>
              </div>

              <div className="inputbox">
                <input
                  value={data.price}
                  onChange={handleclick}
                  type="text"
                  name="price"
                />
                <label>price</label>
              </div>
              <div className="inputbox">
                <input
                  value={data.description}
                  onChange={handleclick}
                  type="textarea"
                  name="description"
                />
                <label>description</label>
              </div>
              <button>AddProduct</button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <br />
        <br />
        <br />
        <br />
        <table className="table">
          <tr style={{ color: "white" }}>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {product.map((item, index) => (
            <tr key={index} style={{ color: "white" }}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>
                <Link
                  style={{ alignItems: "self-start" }}
                  to={`/Updata/${item._id}`}
                >
                  <button className="btn btn-dark">Edit</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-dark"
                  onClick={() => del_data(item._id)}
                >
                  {/* (e) => del(index, e) */}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </section>
    </div>
  );
}

export default Addproduct;
