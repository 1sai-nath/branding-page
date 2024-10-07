import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btns">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>
        <div className="shop">
          <p>Also Available On</p>
          <div className="icons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/public/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
