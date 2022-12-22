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



  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
     <> <Header/>
     <Categories/>
      <Cards />
      <Footer/>
      </>
    }  />
     <Route path="/products/:id" element={<> <Header/>
     <Categories/>
      <Products  />
      <Footer/>
      </>} />
      <Route path="/sellform" element={<Form/>}/>
       <Route path="/ProductListing/:category" element={<> <Header/>
     <Categories/>
      <ProductListings />
      <Footer/>
      </>}  />
     
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
