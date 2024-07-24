import React, { useState, useEffect } from "react";
import axios from "axios";
import BeerList from "./BeerList";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/beers/ale")
      .then((response) => {
        const filteredBeers = response.data.filter(
          (beer) => beer.rating.average > 4.5
        );
        setBeers(filteredBeers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSort = (order) => {
    const sortedBeers = [...beers].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    setBeers(sortedBeers);
    setSortOrder(order);
  };

  return (
    <div>
      <h1>Beer List</h1>
      <button onClick={() => handleSort("asc")}>Sort by Price Ascending</button>
      <button onClick={() => handleSort("desc")}>
        Sort by Price Descending
      </button>
      <BeerList beers={beers} />
    </div>
  );
};

export default App;
