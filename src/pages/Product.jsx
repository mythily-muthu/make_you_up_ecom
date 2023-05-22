import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  useEffect(() => {
    getProductDetails();
  }, []);
  console.log("productDetails", productDetails);
  return (
    <div className="flex flex-col w-full h-full">
      <Topbar />
      <Navbar />
      <Add />
      {loading ? <p>Loading...</p> : <div>{productDetails?.name}</div>}
    </div>
  );
};

export default Product;
