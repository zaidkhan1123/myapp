import { useState } from "react";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import Products from "./products/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
     <> <Header/>
     <Categories/>
      <Cards/>
      <Footer/>
      </>
    }  />
     <Route path="/products" element={<> <Header/>
     <Categories/>
      <Products/>
      <Footer/>
      </>} />
      <Route path="/sellform" element={<Form/>}/>

  
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
