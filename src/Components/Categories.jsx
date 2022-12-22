import React from "react";
import "./Categories.css";
import AllCategories from "./AllCategories";
import { useState } from "react";
import { Link } from "react-router-dom";
function Categories() {
const[show,setShow] = useState(false)

function handleClick (){
  
 if (show == false) {
  setShow(true)
  document.body.classList.add('dropdown-active');
 }else{
  setShow(false)
  document.body.classList.remove('dropdown-active');
 }

}
// const style = {
//   transform: 'rotate(180deg)' ,
//   transition: 'transform 150ms ease' // smooth transition
//  }

  return (
    
    <>
    {show && <AllCategories/>  }
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 categories mt-3 py-2 ">
            <span  className="mt-1 me-4 span3 ms-5">
              ALL CATEGORIES{" "}
              <i  onClick={handleClick} className="ms-1 fs-3  fa fa-solid fa-angle-down" ></i>
            </span>
            <Link to="/ProductListing/electronics" className="_7d3f8c9a ms-2">
              Electronics
            </Link>
            <Link to="/ProductListing/jewelery" className="mx-2">
              Jewelery
            </Link>
            <Link to="/ProductListing/men's clothing" className="mx-2">
             Mens Clothing
            </Link>
            <Link to="/ProductListing/women's clothing" className="mx-2">
             Womens Clothing
            </Link>
          </div>
        </div>
      </div>
  {/* //////////////////////////////////////////CAROUSEL //////////////////////////////////////////*/}
      {/* <div className="container  mt-4">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item " data-bs-interval={100000}>
              <img
                src={"./images/sprite.jpg"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={100000}>
              <img
                src={"./images/sprite.jpg"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={100000}>
              <img
                src={"./images/zong.jpg"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
            </div>
            <div className="carousel-item active " data-bs-interval={100000}>
              <img
                src={"./images/chai.jpg"}
                className="d-block w-100 carousel-img"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
       */}
    </>
  );
}

export default Categories;




       