import React, { useState } from "react";
import Minus from "../../assets/icon-minus.svg?react";
import Plus from "../../assets/icon-plus.svg?react";
import Cart from "../../assets/icon-cart.svg?react";
import Caraous from "../image/Caraous";

const Main = ({ handlePlus, handleMinus, cart, addCart }) => {
  const [checkout, setCheckout] = useState(0);

  return (
    <div className="flex flex-row mx-2 my-0 py-20">
      <div className="basis-main">
        <Caraous />{" "}
      </div>
      <div className="basis-main h-full flex flex-col  justify-center  ">
        {" "}
        <div className="text-orange text-head uppercase mb-4">
          Sneaker Company{" "}
        </div>
        <div className="text-Verydarkblue text-big mb-4">
          Fall Limited Edition Sneakers
        </div>
        <div className="text-paragraph text-Grayishblue mb-4">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div id="price" className="">
          <div id="price" className="flex items-center  ">
            <div className="text-big text-Verydarkblue mb-6">$125.00</div>
            <div className="rounded-[8px] flex items-center justify-center w-discount h-discount bg-paleOrange text-orange ">
              50%
            </div>
          </div>
          <div className="text-paragraph text-Grayishblue mb-4">$250.00 </div>
          <div className="BUTcoNT flex">
            <div className="flex justify-between items-center rounded-[8px] w-butt bg-Lightgrayishblue ">
              <button
                className="flex items-center justify-center p-4"
                onClick={handleMinus}
              >
                <Minus />
              </button>
              {cart}
              <button
                className="flex items-center justify-center p-4"
                onClick={handlePlus}
              >
                <Plus />
              </button>
            </div>

            <button
              onClick={addCart}
              className="ml-[20px] bg-orange w-[200px] h-[50px] rounded-[8px] text-paleOrange flex items-center justify-center  hover:bg-paleOrange text-white"
            >
              <Cart /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
