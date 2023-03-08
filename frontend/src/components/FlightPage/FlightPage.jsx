import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlightPageCard } from "./FlightPageCard";
import Loading from "../Loading/Loading";
import "./FlightPage.scss";
const FlightPage = () => {
  const [keyword, setKeyWord] = useState("");
  const [flights, setFlights] = useState(null);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [allTos, setAllTos] = useState(null);
  const [allFroms, setAllFroms] = useState(null);
  const [user, setUser] = useState(null);
  const getUserDetails = async () => {
    const { data } = await axios.get("/api/v1/me");
    setUser(data);
  };
  const fetchFlights = async () => {
    const { data } = await axios.get("/api/v1/all/flights");
    setFlights(data);
  };
  const getAllTos = async () => {
    const { data } = await axios.get(`/api/v1/all/tos/${from}`);

    console.log(data);
    setAllTos(data);
  };

  const searchFlights = async () => {
    setFlights(null);
    if (keyword == "") {
      const { data } = await axios.get(
        `/api/v1/search/flight?from=${from}&&to=${to}`
      );
      setFlights(data);
    } else {
      const { data } = await axios.get(
        `/api/v1/search/flight?keyword=${keyword}`
      );

      setFlights(data);
    }
  };

  const getAllFroms = async () => {
    const { data } = await axios.get("/api/v1/all/froms");
    console.log(data);
    setAllFroms(data?.arr);
  };
  useEffect(() => {
    fetchFlights();
    getUserDetails();
    getAllFroms();

    if (to != "" || keyword != "") {
      searchFlights();
    }
    if (from != "") {
      getAllTos();
    }
  }, [keyword, from, to]);
  return (
    <div className="content color-change flightpage">
      <div className="nav ">
        {/* <div className="searchBar-flight">
          <input
            type="text"
            placeholder="Type in your destination"
            value={keyword}
            onChange={(e) => {
              setKeyWord(e.target.value);
            }}
          />
        </div> */}
        <div className="select-bars">
          <div class="select navlinks">
            <select
              class="selects"
              name=""
              id=""
              onChange={(e) => {
                setFrom(e.target.value);
              }}
            >
              <option value="" hidden>
                From
              </option>
              {allFroms?.map((fli, key) => (
                <option value={fli}>{fli}</option>
              ))}
            </select>
          </div>
          <div class="select navlinks">
            <select
              class="selects"
              name=""
              id=""
              onChange={(e) => {
                setTo(e.target.value);
              }}
              disabled={from == "" ? true : false}
            >
              <option value="" hidden>
                To..
              </option>
              {allTos?.arr?.map((fli, key) => (
                <option value={fli}>{fli}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {flights == null ? (
        <Loading />
      ) : (
        <div className="flight-div">
          {flights?.flights?.map((flight) => (
            <FlightPageCard item={flight} isAllowed={user?.success} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightPage;
