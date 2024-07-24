import React from "react";

const BeerList = ({ beers }) => {
  return (
    <div>
      {beers.length > 0 ? (
        beers.map((beer) => (
          <div
            key={beer.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
            }}
          >
            <img
              src={beer.image}
              alt={beer.name}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{beer.name}</h2>
            <p>Price: {beer.price}</p>
            <p>
              Rating: {beer.rating.average} ({beer.rating.reviews} reviews)
            </p>
          </div>
        ))
      ) : (
        <p>No beers found with rating greater than 4.5</p>
      )}
    </div>
  );
};

export default BeerList;
