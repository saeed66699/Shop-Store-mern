import React, { useEffect, useState } from "react";
import "./productss.css";

function Products() {
  const [product, setproduct] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/alpha/read");
    const jsonData = await response.json();
    setproduct(jsonData);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div className="container" style={{ paddingTop: "20vh" }}>
      <h2 className="text-center display-3">Wellcome to Shop Store</h2>
      <div className="row">
        {product.map((item) => (
          <div className="col-md-4 mt-4">
            <div class="card">
              <img
                class="card-img-top bg-dark"
                alt="Card image cap"
                src="../asset/product.jpg"
                style={{ height: "200px", width: "100%" }}
              />
              <div class="card-body">
                <h5 class="card-title">
                  {item.title.length > 12
                    ? item.title.slice(0, 12) + "..."
                    : item.title}
                </h5>
                <p class="card-text">${item.price}</p>
                <button
                  // onClick={() => onAdd(item)}
                  href="#"
                  class="btn btn-success"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
