import React from "react";

const Topbar = () => {
  return (
    <div
      className="w-full h-10 bg-center bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url('https://adn-static1.nykaa.com/media/wysiwyg/2021/common-strip.jpg')`,
      }}
    >
      <p className=" hover:text-primary">
        BEAUTY BONANZA Get Your Daily Dose Off Amazing Deals
      </p>
    </div>
  );
};

export default Topbar;
