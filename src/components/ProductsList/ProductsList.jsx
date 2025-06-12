import React from "react";
import productsData from "../../data/productsData";
import "./ProductsList.css";

const ProductList = ({ compareItems, handleToggleCompare, searchTerm }) => {
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredProducts.map((product) => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
          <div className="card h-100 border-0 shadow-lg rounded-4 hover-scale">
            <div className="position-relative p-3 text-center">
              <img
                src={product.image}
                className="img-fluid rounded"
                alt={product.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">{product.name}</h5>
              <p className="text-muted mb-2">{product.brand}</p>
              <p className="text-dark fs-5 fw-semibold">{product.price}</p>
              <div className="mb-3">
                {product.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="badge bg-secondary me-1 mb-1 rounded-pill"
                  >
                    {feat}
                  </span>
                ))}
              </div>
              <button
                className={`btn mt-auto ${
                  compareItems.find((item) => item.id === product.id)
                    ? "btn-outline-danger"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleToggleCompare(product)}
              >
                {compareItems.find((item) => item.id === product.id)
                  ? "Remove"
                  : "Add to Compare"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;
