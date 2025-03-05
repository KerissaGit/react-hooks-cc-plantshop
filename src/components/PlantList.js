import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onToggleStock }) {

  const plantCards = plants.map((plant) => 
    <PlantCard 
    key={plant.id} 
    name={plant.name} 
    image={plant.image} 
    price={plant.price}
    inStock={plant.stocked} 
    onToggleStock={() => onToggleStock(plant.id)}
    />)

  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
