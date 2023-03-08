import React from "react";
import "./CompanyHeader.scss";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
const CompanyHeader = () => {
  const navigate = useNavigate();
  return (
    <div
      className="company-heading color-change"
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={logo} alt="" />
      JMR Airlines
    </div>
  );
};

export default CompanyHeader;
