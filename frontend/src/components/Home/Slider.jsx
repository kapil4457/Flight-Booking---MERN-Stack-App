import React, { useState } from "react";
import "./Slider.scss";
import { useNavigate } from "react-router";
import { ImageCarousal } from "./ImageCarousal";

export default function Slider({ dataSlider }) {
  return <ImageCarousal images={dataSlider} />;
}
