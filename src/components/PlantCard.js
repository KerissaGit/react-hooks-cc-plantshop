import React from "react";

function PlantCard({ name, image, price, onToggleStock, inStock }) {

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={onToggleStock}>In Stock</button>
      ) : (
        <button onClick={onToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
