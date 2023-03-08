import * as React from "react";
import Carousel from "framer-motion-carousel";
import "./ImageCarousal.scss";

export const ImageCarousal = (props) => {
  return (
    <div className="carousal_main">
      <Carousel autoPlay={true}>
        {props?.images?.map((item, i) => (
          <img src={item?.image?.url} key={i} className="image" />
        ))}
      </Carousel>
    </div>
  );
};
