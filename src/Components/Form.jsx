import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {


  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [brand, setbrand] = useState("");
  const [condition, setcondition] = useState("");
  const [price, setprice] = useState("");

  const [SelectedFile, setSelectedFile] = useState(null);

 function  handleFileSubmit (event){
     setSelectedFile(event.target.files[0])
 }

const handleFormSubmit = async (event)=>{
    event.preventDefault()

    const formData = new FormData();
    formData.append("photo",SelectedFile);
    formData.append("add",title)
    formData.append("name",Name)
    formData.append("desc",description)
    formData.append("brand",brand)
    formData.append("condition",condition)
    formData.append("price",price)
    formData.append("location",Location)
    formData.append("phone",Number)
    try{
      const response = await axios({
        method:"post",
        url:"http://localhost:5004/post_data",
        data:formData,
        headers:{"Content-Type" :"multipart/form-data"},
      })
      console.log(response);
    }catch(error){
      console.log(error)
    }

 }


  const [Location, setLocation] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
 


  // function handleimage(e){
  //   const files = Array.from(e.target.files);
  //   files.forEach(file =>{
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend=()=>{
  //       setImageupload(oladarray =>[...oladarray,reader.result])
  //     }
  //   })
  // }
  

  // function HandleClick() {
  //   const url = "http://localhost:5003/post_data";
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   const data = {
  //     add: title,
  //     name: Name,
  //     desc: description,
  //     brand: brand,
  //     condition: condition,
  //     price: price,
  //     img: Imageupload,
  //     location: Location,
  //     phone: Number,
  //   };
  //   axios
  //     .post(url, data, { headers })
  //     .then((res) => {
  //       alert("Form Submitted");
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       alert("Form Failed To Submit");
  //       console.log(err);
  //     });
  // }






  return (
    <>
      <div className="container main mt-5">
        <form onSubmit={handleFormSubmit} >
          <h6 className=" mt-3 ms-2 fw-bold color ">Category</h6>
          <hr />
          <h6 className="color">INCLUDE SOME DETAILS</h6>

          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold fs-6 color"
            >
              Add title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
            />
            <p className="form-pera">
              Mention That key features of Your item (e.g brand,model age, type)
            </p>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label fw-bold color"
            >
              Description
            </label>
            <textarea
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Description"
              type="text"
              rows={3}
              defaultValue={""}
            />
            <p className="form-pera">
              include condition,features and reason selling
            </p>
          </div>

          <div className="">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              Brand
            </label>
            <input
              onChange={(e) => {
                setbrand(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Brand"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              Condition
            </label>
            <input
              onChange={(e) => {
                setcondition(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Condition"
            />
          </div>

          <hr />
          <div className="mb-3 p-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              SET A PRICE
            </label>
            <input
              onChange={(e) => {
                setprice(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Rs"
            />
          </div>

          <hr />
          <div className="container px-5 ">
            <div className="row text-center gx-1 d-flex justify-content-center  ">
              <h6 className="fw-bold color">Upload Multiple Pics</h6>
              <div
                className="col-lg-3 col-md-4 col-sm-6 column mt-1  text-center"
                style={{ height: "10rem" }}
              >
                <img
                  src={"./images/camera.svg"}
                  alt=""
                  className="camera mt-4 "
                />{" "}
                <br /> <br />
                <input
                  type="file"
                  multiple
                  accept="image/"
                  onChange={handleFileSubmit}
                 
                  className="input-img mt-3 ms-4"
                />
              
              </div>
              <p className="form-pera">
                for The Cover picture we recommend using the landscape mode
              </p>
            </div>
          </div>
          <hr />

          <div className="mb-3 p-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold fs-6 mt-2 color"
            >
              Location
            </label>
            <input
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="location"
            />
          </div>
          <hr />
          <div className="row">
            <div className="col-md-1  mt-4 ">
              <img
                src={"./images/profile.png"}
                alt=""
                className="ms-4 mt-1"
                style={{ width: "4rem" }}
              />
            </div>
            <div className="col-md-11 ">
              {" "}
              <div className="mb-3 p-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold fs-6 mt-2 color"
                >
                  Name
                </label>

                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
                <h6 className="fw-bold mt-1 color">Lets Verify Your Account</h6>
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-bold fs-6 mt-2 color "
                >
                  Mobile Phone Number
                </label>
                <input
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone,Number"
                />
              </div>
            </div>
          </div>
          <hr />

          <button
            type="submit"
           
            className="last-btn py-2 my-2"
          >
            Post Now
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
