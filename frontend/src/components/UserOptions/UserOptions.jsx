import React, { useEffect, useRef, useState } from "react";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import "./UserOptions.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import { toast as toaster } from "react-toastify";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const UserOptions = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const getUserDetails = async () => {
    const { data } = await axios.get("/api/v1/me");
    setUser(data?.user);
  };

  const LogoutHandler = async () => {
    toaster.success("Logged Out SuccessFully");
    await axios.post("/api/v1/logout");

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  let items = [
    {
      label: user == null ? "Logout" : "Login",
      icon: user == null ? "pi pi-sign-out" : "pi pi-sign-in",
      command: () => {
        if (user != null) {
          console.log("Ourt");
          LogoutHandler();
        } else {
          navigate("/login");
        }
      },
    },
    {
      label: "Account",
      icon: "pi pi-user",
      command: () => {
        navigate("/me");
      },
    },

    {
      label: "Flights",
      icon: "bx bxs-plane icon",
      command: () => {
        navigate("/flight");
      },
    },
    {
      label: "Tours",
      icon: "pi pi-book",
      command: () => {
        navigate("/tour");
      },
    },
    {
      label: "Contact",
      icon: "pi pi-phone",
      command: () => {
        navigate("/contact");
      },
    },
    {
      label: "Instructions",
      icon: "pi pi-tablet",
      command: () => {
        navigate("/instructions");
      },
    },
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate("/");
      },
    },
  ];

  const addDashBoard = () => {
    items.push({
      label: "DashBoard",
      icon: "pi pi-box",
      command: () => {
        navigate("/dashboard/users");
      },
    });
  };
  useEffect(() => {
    // if (!user) {
    //   getUserDetails();
    //   items.push({
    //     label: "Login",
    //     icon: "pi pi-sign-in ",
    //     command: () => {
    //       navigate("/login");
    //     },
    //   });
    // }

    // if (user) {
    //   items.push();
    // }

    if (!user) {
      getUserDetails();
    }
    if (user?.role == "admin") {
      addDashBoard();
    }
  }, [user]);

  return (
    <div className="card-t">
      <div style={{ position: "relative", height: "500px" }}>
        <Toast ref={toast} />
        <SpeedDial
          model={items}
          direction="up"
          style={{ left: "calc(50% - 2rem)", bottom: 0 }}
        />
      </div>
    </div>
  );
};

export default UserOptions;
