import React from 'react'
import "./Categories.css";
function Categories() {
  return (
    <>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-12 categories mt-3 py-2 ">
         <span className='mt-1 me-4 span3 ms-5'>ALL CATEGORIES <i className=" ms-1 fs-3 fa fa-solid fa-angle-down"></i></span>
          <a href="/mobile-phones_c1453" className="_7d3f8c9a ms-2">Mobile Phones</a>
         <a href="/cars_c84" className='mx-2'>Cars</a>
         <a href="/Motorcycles" className='mx-2'>Motorcycles</a>
         <a href="/Houses" className='mx-2'>Houses</a>
         <a href="/tv.video.audio"className='mx-2'>TV - Video - Audio</a>
         <a href="/Tablets" className='mx-2'>Tablets</a>
         <a href="/Land & plots" className='mx-2'>Land & Plots</a>
        </div>
      </div>
    </div>
  
    <div className="container  mt-4">
    <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2400}>
      <img src={"./images/sprite.jpg"} className="d-block w-100 carousel-img" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2400}>
      <img src={"./images/sprite.jpg"} className="d-block w-100 carousel-img" alt="..." />
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
    </>
  )
}

export default Categories
