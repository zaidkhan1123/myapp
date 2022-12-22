import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import imagegif from "../svgs/giff.gif"
import "./ProductListing.css"

function ProductListings() {
  const [apiData, setApiData] = useState([]);
  const [disc, setDisc] = useState(true);
  const [fullView, setFullView] = useState(false);
  const [rowView, setRowView] = useState(false);
  const [cardHeight, setCardHeight] = useState({});
  const [cardContainerClass, setCardContainerClass] = useState("");
  const [cardImgClass, setCardImgClass] = useState("");
  const [featureBtn, setFeatureBtn] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(()=>{
    axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((result) => {
      const data = result.data;
      handleDisc();

      setApiData(data);
      setIsLoading(false);
    });

  },[category])

  const handleFullView = () => {
    setCardContainerClass("col-12");
    setCardHeight({
      height: "auto",
      minHeight: 450,
    });
    setCardImgClass("card-img-top card-img-full");
    setFeatureBtn(
      "featur-btn-full position-absolute border-0 rounded p-1 fw-bold"
    );
    setRowView(false);
    setDisc(false);
    setFullView(true);
  };

  const handleDisc = () => {
    setCardContainerClass("col-md-6 col-sm-12 col-lg-4");
    setCardHeight({
      height: "auto",
      minHeight: 310,
    });
    setCardImgClass("card-img-top card-img");
    setFeatureBtn("featur-btn position-absolute border-0 rounded p-1 fw-bold");
    setDisc(true);
    setRowView(false);
    setFullView(false);
  };

  const handleRow = () => {
    console.log("row clicked");
    setRowView(true);
    setDisc(false);
    setFullView(false);
  };

  // filter by lowest or hieghest price

  const handleSelectFilter = (e) => {
    const selectValue = e.target.value;
  };

  return (
    <>
      <div className="container-fluid productListingContainer w-75 mb-5">
        {isLoading ? (
          <div className=" mx-auto text-center w-100">
            <img className="mx-auto mt-3" src={imagegif} alt="" />
          </div>
        ) : (
          <>
            <div className="row w-100 py-2 my-2 ">
              <div className="col-lg-4">
                <h3 className="fs-6 fw-bold border-bottom border-2">Filters</h3>
              </div>
              <div className="col-lg-8 border-bottom border-2 d-flex justify-content-between">
                <div className="CheckboxContainer">
                  <input
                    type="checkbox"
                    className="CheckBox me-2"
                    id="CheckBox"
                  />
                  <label htmlFor="CheckBox" className="CheckBoxLable fs-14">
                    Only with photos
                  </label>
                </div>
                <div className="selectView d-flex align-items-center justify-content-between w-25">
                  <span className="viewText fs-14 fw-bold">VIEW</span>

                  <MenuOutlinedIcon
                    onClick={handleRow}
                    className="curserPointer rowBtn viewBtn"
                    style={rowView ? { backgroundColor: "#C8F8F6" } : null}
                  />

                  <GridViewOutlinedIcon
                    onClick={handleDisc}
                    className="curserPointer discBtn viewBtn"
                    style={disc ? { backgroundColor: "#C8F8F6" } : null}
                  />

                  <ViewAgendaOutlinedIcon
                    onClick={handleFullView}
                    className="curserPointer fullBtn viewBtn"
                    style={fullView ? { backgroundColor: "#C8F8F6" } : null}
                  />
                </div>
                <div className="sortBy d-flex justify-content-center align-items-center">
                  <label className="fs-14 fw-bold" id htmlFor="sortBy">
                    SORT BY:
                  </label>

                  <select
                    id="sortBy"
                    className="sortBy form-select form-select-sm border-0 fs-14 max-width"
                    onChange={handleSelectFilter}
                  >
                    <option>None</option>
                    <option value="low">Lowest Price</option>
                    <option value="heigh">Heighest Price</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-lg-4 d-none d-lg-block">
                <h3 className="fs-6 fw-bold">CATEGORIES</h3>
                <div className="px-3 border-bottom border-2 grayShade">
                  <span className="fs-14 ">All Categories</span>
                     <ul>
                      <li className="fourteen">Electronics</li>
                      <li className="fourteen">Jewelery</li>
                      <li className="fourteen">Mens Clothing</li>
                      <li className="fourteen">womens Clothing</li>
                     </ul>
                </div>
                <div className="my-3 py-3 border-bottom border-2">
                  <h3 className="fs-6 fw-bold">LOCATIONS</h3>
                  <div className="countrySearch border border-1 border-dark rounded-1 bg-white p-2 my-3">
                    <input
                      type="text"
                      className="border-0 px-2 countrySearchInput"
                      placeholder="Pakistan"
                    />
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="px-3">
                    <span className="fs-14 ">Pakistan</span>
                    <ul className="list-unstyled ms-3 my-2 grayShade">
                      <li className="fs-14 mb-1">Punjab</li>
                      <li className="fs-14 mb-1">Sindh</li>
                      <li className="fs-14 mb-1">Khyber Pakhtunkhwa</li>
                      <li className="fs-14 mb-1">Balochistan</li>
                      <li className="fs-14 mb-1">
                        Islamabad Capital Territory
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-3 py-3 border-bottom border-2 grayShade">
                  <h3 className="fs-6 fw-bold text-dark">BRANDS</h3>
                  <ul className="list-unstyled ">
                    <li className="fs-14 mb-1">Apple iPhone</li>
                    <li className="fs-14 mb-1">Samsung Mobile</li>
                    <li className="fs-14 mb-1">Vivo </li>
                    <li className="fs-14 mb-1">OPPO</li>
                    <li className="fs-14 mb-1">Infinix</li>
                  </ul>
                </div>
                <div className="my-3 py-3 border-bottom border-2 grayShade">
                  <h3 className="fs-6 fw-bold text-dark">CONDITIONS</h3>
                  <div className="my-3">
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="usedCheckBox"
                      />
                      <label
                        htmlFor="usedCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        Used
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="newCheckBox"
                      />
                      <label
                        htmlFor="newCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        New
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="openCheckBox"
                      />
                      <label
                        htmlFor="openCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        Open Box
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="notWorkingCheckBox"
                      />
                      <label
                        htmlFor="notWorkingCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        For Parts or Not Working
                      </label>
                    </div>
                    <div className="CheckboxContainer mb-2">
                      <input
                        type="checkbox"
                        className="CheckBox me-2"
                        id="refurbishedCheckBox"
                      />
                      <label
                        htmlFor="refurbishedCheckBox"
                        className="CheckBoxLable fs-14"
                      >
                        Refurbished
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid listingColumn col-lg-8">
                <div className="row gy-3 ">
                  {apiData.map((item, index) => {
                    return (
                      <div key={index} className={cardContainerClass}>
                        <Link
                          className="text-decoration-none"
                          to={`/products/${item.id}`}
                        >
                          <div
                            className="card position-relative"
                            style={cardHeight}
                          >
                            <img
                              src={item.image}
                              className={cardImgClass}
                              alt="product"
                            />
                            <button className=" featured position-absolute rounded-1 border bg-warning px-1 warning"> FEATURED</button>
                            <div className="card-body position-relative pb-0">
                              <span className="feature-line position-absolute top-0 start-0"></span>
                              <i className="fa-regular fa-heart heart-icon position-absolute hurt-icon text-dark"></i>
                              <p className="card-text text-dark w-lg-75">
                                {item.title.slice(0, 20)}
                              </p>

                              <h5 className="fw-bold price text-dark">
                                Rs {item.price}
                              </h5>
                              <p className="cardFooter position-absolute bottom-0">
                                Lahore • 1 week ago
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProductListings;