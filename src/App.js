import { useState } from "react";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import Products from "./products/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css"
import ProductListings from "./Components/ProductListing";


function App() {
 const [index,setIndex]=useState("")
  function GetIndex(ind){
   console.log(ind);
   setIndex(ind)
  }


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
     <> <Header/>
     <Categories/>
      <Cards Getindex={GetIndex}  />
      <Footer/>
      </>
    }  />
     <Route path="/products" element={<> <Header/>
     <Categories/>
      <Products cardIndex={index} />
      <Footer/>
      </>} />
      <Route path="/sellform" element={<Form/>}/>
       <Route path="/ProductListing" element={<ProductListings/>}  />
     
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
