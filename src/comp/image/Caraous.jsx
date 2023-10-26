import React, { useState } from "react";
import Product1 from "../../assets/image-product-1.jpg";
import Product2 from "../../assets/image-product-2.jpg";
import Product3 from "../../assets/image-product-3.jpg";
import Product4 from "../../assets/image-product-4.jpg";
import Product1t from "../../assets/image-product-1-thumbnail.jpg";
import Product2t from "../../assets/image-product-2-thumbnail.jpg";
import Product3t from "../../assets/image-product-3-thumbnail.jpg";
import Product4t from "../../assets/image-product-4-thumbnail.jpg";
const Caraous = () => {
  const [expImage, setExp] = useState(Product1);
  const list = [
    { img: Product1, thumbnail: Product1t, alt: "product 1" },
    { img: Product2, thumbnail: Product2t, alt: "product 2" },
    { img: Product3, thumbnail: Product3t, alt: "product 3" },
    { img: Product4, thumbnail: Product4t, alt: "product 4" },
  ];

  const click = (big) => {
    setExp(big);
    console.log({ tes: expImage });
  };
  return (
    <div className="container h-full flex flex-col content-center items-center justify-center ">
      {expImage && (
        <div className="mb-6">
          <img src={expImage} />
        </div>
      )}
      <ul className="flex flex-row justify-between">
        {list.map((image, index) => (
          <li key={index} className="mr-3">
            <img
              src={image.thumbnail}
              alt={image.alt}
              onClick={() => click(image.img)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Caraous;
