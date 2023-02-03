import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <h2>Item</h2>
      <p>This is the item page</p>
      <Link to="/items">
        <button>Go to another page</button>
      </Link>
      <button>Kopen</button>
    </div>
  );
};

export default Shop;
