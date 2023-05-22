import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Add />
      <div>Home</div>
      <Footer />
    </div>
  );
};

export default Home;
