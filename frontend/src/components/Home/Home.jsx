import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import axios from "axios";
// import Footer from './footer/Footer'
import "../Tour/tours.scss";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
const Row = ({ item }) => {
  const navigate = useNavigate();
  const redirectPage = async () => {
    navigate(`/tours/${item?._id}`);
  };
  console.log(item);
  return (
    <div>
      <div className="row">
        <div>
          <div class="card card-2">
            <img src={item?.image?.url} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <div class="card__header-text">
                  <h3 class="card__title">{item.name}</h3>
                </div>
              </div>
              <div class="disc">
                <div class="card__description">
                  <div>
                    <i class="bx bxs-plane icon"></i>
                  </div>
                </div>
                <div class="card__description">
                  <div>
                    <i class="bx bx-building icon"></i>
                  </div>
                </div>
                <div class="card__description">
                  <div>
                    <i class="bx bx-walk icon"></i>
                  </div>
                </div>
                <div class="card__description">
                  <div>
                    <button class="custom-btn btn-10" onClick={redirectPage}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div class="card__description bottomdis">
                <span class="pricet">Price: ₹{item?.packagePrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  const [latest, setLatest] = useState(null);
  const [trending, setTrending] = useState(null);
  const [images, setImages] = useState();
  const fetchLastest = async () => {
    try {
      const { data } = await axios.get("/api/v1/get/latest/tours");
      setLatest(data?.tours);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const fetchTrending = async () => {
    try {
      const { data } = await axios.get("/api/v1/get/trending/tours");
      setTrending(data?.tours);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const fetchAllImages = async () => {
    const { data } = await axios.get("/api/v1/get/all/posters");
    setImages(data?.poster);
    console.log(data);
  };

  useEffect(() => {
    fetchLastest();
    fetchTrending();
    fetchAllImages();
  }, []);
  return (
    <>
      {latest == null || trending == null ? (
        <Loading />
      ) : (
        <>
          <div className="content home-main color-change">
            <Slider dataSlider={images} />
            <div className="home-sliider-div">

            <div className="inner-div-home-slider">

            <h2>Trending</h2>
            <div className="genreBox">
              {trending?.map((item) => (
                <Row item={item} />
                ))}
                </div>
            </div>
            <div>

            <h2>Latest</h2>
            <div className="genreBox">
              {latest?.map((item) => (
                <Row item={item} />
                ))}
            </div>
                </div>
          </div>
                      </div>

        </>
      )}
    </>
  );
};
