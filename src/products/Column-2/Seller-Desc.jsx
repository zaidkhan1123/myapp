import React from 'react'

function SellerDesc() {
  return (
    <div>
            <div className="container border rounded-2 my-2 py-4 px-3">
        <h2 className="sellerDescriptionTitle fs-5">Seller Description</h2>
        <div className="sellerProfile d-flex">
          <img
            src={"https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"}
            className="sellerImage"
            alt="seller profile image"
          />
          <div className="sellerNameAndTime max-height my-auto ms-2">
            <h3 className="sellerName m-0 fw-bold">Salman</h3>
            <p className="memberTime grayShade m-0">Member since Jul 2022</p>
          </div>
          <i
            role="button"
            className="fa-solid fa-angle-right ms-auto max-height my-auto fs-4"
          ></i>
        </div>
        <button className="btn btn-lg w-100 chatWithSellerBtn text-white fw-bold rounded-1 my-3">
          Chat with seller
        </button>
        <div className="sellerContactDetail text-center">
          <i className="fa fa-phone fs-5"></i>
          <span className="fs-14 text-primary ms-3 fw-bold">
            +92 123 4566789
          </span>
        </div>
      </div>
    </div>
  )
}

export default SellerDesc
