import React, { useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import {tourData} from "../tourData";

const TourList = () => {

  const [tours, setTours] = useState(tourData);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <section className="tourlist">
{tours.map((tour) => {
  return <Tour key={tour.id} tour={tour} removeTour={removeTour} />
})}
      
    </section>
  );
};

export default TourList;
