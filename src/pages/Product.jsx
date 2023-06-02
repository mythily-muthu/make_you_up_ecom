import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  //   console.log("params", params);
  let apiUrl = "https://mythu-ecommerce-app.onrender.com/product/find";

  const getProductDetails = async () => {
    let res = await axios.get(`${apiUrl}/${params.productid}`);
    setProductDetails(res.data);
    setLoading(false);
  };

  //component did mount
  useEffect(() => {
    getProductDetails();
  }, []);
  console.log("productDetails", productDetails);
  return (
    <div className="flex flex-col w-full h-full">
      <Topbar />
      <Navbar />
      <Add />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className=" w-full h-full bg-slate-500">
          <div className="flex w-full h-full bg-slate-500">
            <div className="flex w-[550px] h-[600px]">
              <img
                src={productDetails.image_link}
                alt={productDetails.name}
                className="bg-red-400  "
              />
            </div>
            <div className="w-1/2"> sfg</div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Product;
