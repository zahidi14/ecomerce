import React from "react";
import Product1t from "../../assets/image-product-1-thumbnail.jpg";
import Delete from "../../assets/icon-delete.svg?react";

const Keranjang = () => {
  return (
    <div className="mb-5 flex items-center justify-center max-h-full text-Grayishblue">
      Your Cart Is Empty
    </div>
  );
};

const Shop = ({ price, qty, clear }) => {
  return (
    <div
      className="w-[300px] h-[250px] p-5 bg-Lightgrayishblue
     rounded-[1em] absolute right-20 shadow-2xl z-50"
    >
      <div className="my-5">Cart</div>
      {qty === 0 ? (
        <Keranjang />
      ) : (
        <>
          <div className="flex mb-5">
            <div className="mr-5">
              <img
                src={Product1t}
                alt=""
                className="w-10 h-10 rounded-[8px] "
              />
            </div>
            <div className="tit mr-5">
              <div className="up">Fall Limited Edition Sneakers</div>{" "}
              <div className="price text-[14px] text-Grayishblue">
                $125.00 x {qty} {price}
              </div>{" "}
            </div>
            <div id="delete" className=" :hover cursor-pointer" onClick={clear}>
              <Delete />
            </div>
          </div>
          <w className="full">
            <button className="bg-orange w-full h-[50px] text-White rounded-[10px] hover:cursor-pointer hover:text-Lightgrayishblue hover:bg-paleOrange">
              Checkout
            </button>
          </w>
        </>
      )}
    </div>
  );
};

export default Shop;
