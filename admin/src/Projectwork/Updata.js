import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./loginSignup.css";
import axios from "axios";

function Updata() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [val, setVal] = useState({
    id: id,
    title: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/alpha/edit/${id}`).then((res) => {
      setVal({
        ...val,
        title: res.data.title,
        price: res.data.price,
        description: res.data.description,
      });
    });
  }, []);
  const handlesubmit = (e) => {
    axios
      .put(`http://127.0.0.1:5000/alpha/update/${id}`, val)
      .then((res) => {
        navigate("/Addproduct");
      })
      .catch(console.log("error"));
  };

  return (
    <div style={{ paddingTop: "20vh" }}>
      <section>
        <div className="form-box " style={{ height: "70vh" }}>
          <div className="form-value from-control">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlesubmit();
              }}
            >
              <h2>Addproducts</h2>
              <div className="inputbox">
                <input
                  value={val.title}
                  onChange={(e) => setVal({ ...val, title: e.target.value })}
                  type="text"
                  name="title"
                />
                <label>Title</label>
              </div>

              <div className="inputbox">
                <input
                  value={val.price}
                  onChange={(e) => setVal({ ...val, price: e.target.value })}
                  type="text"
                  name="price"
                />
                <label>price</label>
              </div>
              <div className="inputbox">
                <input
                  value={val.description}
                  onChange={(e) =>
                    setVal({ ...val, description: e.target.value })
                  }
                  type="textarea"
                  name="description"
                />
                <label>description</label>
              </div>
              <button>Udate</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Updata;
