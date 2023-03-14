import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./SideMenu.scss";
import { NavLink, useNavigate } from "react-router-dom";
const SideMenu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUserDetails = async () => {
    const { data } = await axios.get("/api/v1/me");
    setUser(data?.user);
  };

  const LogoutHandler = async () => {
    await axios.post("/api/v1/logout");
    toast.success("Logged Out SuccessFully");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };


  const sideBarHandler = async()=>{
      document.querySelector("nav").classList.add("close");
              document
                .querySelector(".content")
                .classList.remove("content-big");
document.querySelector(".company-heading").classList.remove("content-big")

  }
  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <>
      <nav className="sidebar close">
        <header>
          <div
            className="image-text"
            style={{ cursor: "pointer" }}

            onClick={() => {
              sideBarHandler()
              navigate("/me");
            }}
          >
            <span className="image">
              <img
                src={
                  user?.avatar?.url
                    ? user?.avatar?.url
                    : "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                }
                alt=""
              />
            </span>

            <div className="text logo-text">
              <span className="name">
                {user?.name ? user?.name : "Guest User"}
              </span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={() => {
              document.querySelector("nav").classList.toggle("close");
              document
                .querySelector(".content")
                .classList.toggle("content-big");
                document.querySelector(".company-heading").classList.toggle("content-big")
            }}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <NavLink to="/" onClick={sideBarHandler}>
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Home</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink to="/flight" onClick={sideBarHandler} >
                  <i className="bx bxs-plane icon"></i>

                  <span className="text nav-text">Flights</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink to="/tour" onClick={sideBarHandler}>
                  <i className="bx bx-book icon"></i>
                  <span className="text nav-text">Tour</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink to="/contact" onClick={sideBarHandler}>
                  <i className="bx bx-phone icon"></i>
                  <span className="text nav-text">Contact Us</span>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/instructions" onClick={sideBarHandler}>
                  <i className="bx bx-book-open icon"></i>
                  <span className="text nav-text">Instruction</span>
                </NavLink>
              </li>
              {user?.role == "admin" ? (
                <li className="nav-link">
                  <NavLink to="/dashboard/users" onClick={sideBarHandler}>
                    <i className="bx bxs-dashboard icon"></i>
                    <span className="text nav-text">DashBoard</span>
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>

          <div className="bottom-content">
            {user ? (
              <li
                className=""
                style={{ cursor: "pointer" }}
                onClick={()=>{
                  LogoutHandler()
                  sideBarHandler()
                }}
              >
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </li>
            ) : (
              <li
                className=""
                style={{ cursor: "pointer" }}
                onClick={() => {
                  sideBarHandler()
                  navigate("/login");
                }}
              >
                <i className="bx bx-log-in icon"></i>
                <span className="text nav-text">Login</span>
              </li>
            )}

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div
                className="toggle-switch"
                onClick={() => {
                  document.querySelector("body").classList.toggle("dark");
                  document
                    .querySelector("body")
                    .querySelector(".color-change")
                    .classList.toggle("dark-color");
                  if (
                    document.querySelector("body").classList.contains("dark")
                  ) {
                    document.querySelector(".mode-text").innerText =
                      "Light mode";
                  } else {
                    document.querySelector(".mode-text").innerText =
                      "Dark mode";
                  }
                }}
              >
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
