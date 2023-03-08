import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="content page-not-found">
      <i className="bx bx-x icon"></i>
      <h2 className="page-not-found-cont">404 Page Not Found</h2>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
};

export default PageNotFound;
