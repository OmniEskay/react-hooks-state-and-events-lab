import React, { useState } from "react"; 

function Item({ name, category }) {
  
  const [isInCart, setIsInCart] = useState(false); 

  const handleToggleCartClick = () => {
    setIsInCart(prevIsInCart => !prevIsInCart); 
  };

  const itemClassName = isInCart ? "in-cart" : "";

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleToggleCartClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;