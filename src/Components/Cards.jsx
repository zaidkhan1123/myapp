import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Cards() {
  const initialVAlue = 8;

  const [post, setPost] = useState(initialVAlue);
  const [isLloading,setisLoading]=useState(true)
  function loadMore() {
    setPost(post + initialVAlue);
  }



  const [Detail, setdetail] = useState([]);
  console.log(Detail);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
  
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setdetail(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    {isLloading ?  <div className=" mx-auto text-center w-100">
    <div className="spinner-border mt-5 text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
          </div> : 
      <div className="container-fluid section bg-light mt-5 px-5 ms-1 ">
        <div className="container">
          <h4 className="p-3">Fresh Recomendations</h4>
          <div className="row gy-3">
            {Detail.slice(0, post).map((item, ind) => {
              return (
                <>
                  <div key={ind} className="col-md-4 col-sm-6 col-lg-3">
                    <Link
                      
                      to= {`/products/${item.id}`}
                      className="card text-dark"
                      style={{ height: "auto", minHeight: "310px" }}
                    >
                      <div class="featured position-absolute rounded-1 border bg-warning px-1">
                        FEATURED
                      </div>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          height: "150px",
                          backgroundColor: " rgb(34, 34, 34)",
                        }}
                      />
                      <div className="card-body  ">
                        <img
                          className="card-imge"
                          src={"./images/heart.svg"}
                          alt=""
                          style={{ width: "8%" }}
                        />
                        <p className="card-text custom">{item.title}</p>

                        <h5 className="price">Rs {item.price}</h5>
                        <p className="cardlocation">
                          Mall Road, Lahore . 1 week ago
                        </p>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
          <div className="text-center mt-3 ">
            {post < Detail.length ? (
              <button className="btn btn-primary" onClick={loadMore}>
                Load More
              </button>
            ) : (
              <p className="grey">There Are No More Items</p>
            )}
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Cards;
