import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState("Add to Cart");

  function handleCart() {
    if (addCart === "Add to Cart") {
      setAddCart("Remove From Cart");
    } else {
      setAddCart("Add to Cart");
    }
  }
  let LiClass = addCart === "Add to Cart" ? "" : "in-cart";
  let btnClass = addCart === "Add to Cart" ? "add" : "remove";

  return (
    <li className={LiClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleCart}>
        {addCart}
      </button>
    </li>
  );
}

export default Item;
