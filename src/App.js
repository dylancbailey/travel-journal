import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return(
      <Card 
        key = {item.id}
        img = {item.imageUrl}
        title = {item.title}
        location = {item.location}
        googleMapsUrl = {item.googleMapsUrl}
        startDate = {item.startDate}
        endDate = {item.endDate}
        description = {item.description}
      />
    );
  });
  return (
    <div className="container">
      <Header />
      {cards}
    </div>
  );
}

export default App;