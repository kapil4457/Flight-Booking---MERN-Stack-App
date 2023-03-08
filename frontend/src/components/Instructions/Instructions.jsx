import React from "react";
import "./Instructions.scss";
import flight1 from "./images-instruction/flight1.png";
import flight2 from "./images-instruction/flight2.png";
import flight3 from "./images-instruction/flight3.png";
import flight4 from "./images-instruction/flight4.png";
import tour1 from "./images-instruction/tour1.png";
import tour2 from "./images-instruction/tour2.png";
import tour3 from "./images-instruction/tour3.png";
import tour4 from "./images-instruction/tour4.png";

export const Instruction = () => {
  const flights = [
    {
      image: flight1,
      title: ["Click on Flights Button"],
    },
    {
      image: flight2,
      title: ["Either search for a flight or apply filter"],
    },
    {
      image: flight3,
      title: ["Click on the Buy Now option"],
    },
    {
      image: flight4,
      title: ["Fill in the card Details and Hit the Pay Now Button"],
    },
  ];
  const tours = [
    {
      image: tour1,
      title: ["Go to the tours section"],
    },
    {
      image: tour2,
      title: [
        "Click/Hover on the Tour Card you are interested in",
        "Click on the Read More Button",
        "You will then be redirected to the Tour Description page",
      ],
    },
    {
      image: tour3,
      title: ["Click on the Book Tour Button"],
    },
    {
      image: tour4,
      title: ["Hit the Pay Button "],
    },
  ];
  return (
    <div>
      <div class="instruction-main content color-change">
        <div className="instruction">
          <h1>Flight Booking Instructions</h1>
          <div className="instructions-cont">
            {flights?.map((item, key) => (
              <div>
                <h2>Step {key + 1}</h2>
                <img src={item.image} alt="" />
                <div>
                  {item?.title?.map((title, key) => (
                    <p>
                      {key + 1}
                      {`)`} {title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="instruction">
          <h1>Tour Booking Instructions</h1>
          <div className="instructions-cont">
            {tours?.map((item, key) => (
              <div>
                <h2>Step {key + 1}</h2>
                <img src={item.image} alt="" />
                <div>
                  {item?.title?.map((title, key) => (
                    <p>
                      {key + 1}
                      {`)`} {title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
