import React from "react";
import "./AllCategories.css";
import { Link } from "react-router-dom";
function AllCategories() {
  return (
    <>
      <div className="category-items border-end border-bottom border-start mx-4 container bg-white">
        <div className="row">
          <div className="category-item col-lg-3 mt-5 lh-base">
            <ul type="none">
              <li>
                {" "}
                <Link
                  to="/ProductListing/electronics"
                  className="_7d3f8c9a ms-2"
                >
                  Electronics
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/ProductListing/jewelery" className="mx-2">
                  Jewelery
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/ProductListing/men's clothing" className="mx-2">
                  Mens Clothing
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/ProductListing/women's clothing" className="mx-2">
                  Womens Clothing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCategories;
