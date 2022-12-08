import { useState } from "react";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [signIn, setsignIn] = useState(false);

  function handleClicked() {
    setsignIn(true);
  }

  return (
    <>
      {signIn == true ? (
        <Form />
      ) : (
        <>
          <Header handleClicked={handleClicked} />
          <Categories />
          <Cards />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
