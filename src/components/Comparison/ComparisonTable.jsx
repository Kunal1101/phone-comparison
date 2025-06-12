import React from "react";
import getFeatureDifferences from "../../utils";

const ComparisonTable = ({ compareItems, clearCompare }) => {
  return (
    <>
      {compareItems.length >= 2 && (
        <div className="compare-section mt-5">
          <div className="d-flex justify-content-between mb-3">
            <h2>Comparison View</h2>
            <button className="btn btn-warning mb-2" onClick={clearCompare}>
              Clear Comparison
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Feature</th>
                  {compareItems.map((item) => (
                    <th key={item.id}>{item.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brand</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>{item.brand}</td>
                  ))}
                </tr>
                <tr>
                  <td>Price</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>{item.price}</td>
                  ))}
                </tr>

                {["Display", "Camera", "Storage"].map((feature, index) => {
                  const diffFlags = getFeatureDifferences(compareItems, index);
                  return (
                    <tr key={feature}>
                      <td>{feature}</td>
                      {compareItems.map((item, i) => (
                        <td
                          key={item.id}
                          className={diffFlags[i] ? "highlight-diff" : ""}
                        >
                          {item.features[index]} {diffFlags[i]}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ComparisonTable;
