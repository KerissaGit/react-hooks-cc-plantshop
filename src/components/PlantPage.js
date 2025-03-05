import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchPlants, setSearchPlants] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((allPlants) => setPlants(allPlants));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleToggleStock(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, stocked: !plant.stocked } : plant
    );
    setPlants(updatedPlants);
  }

  function handleSearch(searchText) {
    setSearchPlants(searchText);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchPlants.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onUpdateSearch={handleSearch}/>
      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock}/>
    </main>
  );
}

export default PlantPage;
