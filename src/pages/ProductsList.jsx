import React from "react";
import products from "../data/products.json";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  let navigate = useNavigate();
  // console.log("products", products);
  const handleProductLink = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="w-full h-full ">
      <Topbar />
      <Navbar />
      <Add />
      <div className=" w-full h-full bg-slate-100  ">
        <div className="flex gap-10 flex-wrap justify-center ">
          {products.map((item) => {
            return (
              <div
                className="flex flex-col items-center bg-white rounded-lg overflow-hidden w-72 p-5"
                key={item._id}
                onClick={() => handleProductLink(item._id)}
              >
                <img
                  src={item.image_link}
                  alt={item.name}
                  className="w-48 h-96 object-contain"
                />
                <div className=" flex items-center flex-col p-3 gap-y-5 ">
                  <p className="text-xl font-semibold flex justify-center">
                    {item.name}
                  </p>
                  <p className="text-xl flex justify-center">
                    USD:{item.price}$
                  </p>
                  <p className="text-xl flex justify-center ">{item.brand}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
