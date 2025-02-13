import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
