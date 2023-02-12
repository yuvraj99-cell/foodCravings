import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
