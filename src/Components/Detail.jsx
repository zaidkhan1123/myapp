import React from 'react'
import "./Detail.css"



function Detail() {


  return (
    <>
<div className="productImageSlider border">
  <div className="row">
    <div className="col-md-6">
    <div className="row h-100">
          <div className="col-md-12 h-100">
            <div
              id="bootstrapCarouselIndicator"
              className="carousel slide h-100"
              data-interval="false"
            >
              <div className="carousel-indicators pt-3 thumb-container">
                <img
                  data-bs-target="#bootstrapCarouselIndicator"
                  data-bs-slide-to="0"
                  src={"./images/iphone.jpg"}
                  className="d-block w-auto active thumbs"
                  alt="product "
                />

                <img
                  data-bs-target="#bootstrapCarouselIndicator"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  src={"./images/car.jpg"}
                  className="d-block w-auto thumbs"
                  alt="product "
                />

                <img
                  data-bs-target="#bootstrapCarouselIndicator"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  src={"./images/car2.jpg"}
                  className="d-block w-auto thumbs"
                  alt="product "
                />
              </div>
              <div className="carousel-inner carouselInnerContainer ">
                <div className="carousel-item h-100 active">
                  <img
                    src={"./images/iphone.jpg"}
                    className="d-block w-100 slideImg"
                    alt="product "
                  />
                </div>
                <div className="carousel-item h-100">
                  <img
                    src={"./images/car.jpg"}
                    className="d-block w-100 slideImg"
                    alt="product "
                  />
                </div>
                <div className="carousel-item h-100">
                  <img
                    src={"./images/car2.jpg"}
                    className="d-block w-100 slideImg"
                    alt="product "
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev prev"
                type="button"
                data-bs-target="#bootstrapCarouselIndicator"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next next"
                type="button"
                data-bs-target="#bootstrapCarouselIndicator"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
      
      </div>
</>

 


  )
}

export default Detail





