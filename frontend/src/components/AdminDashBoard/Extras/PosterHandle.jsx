import React, { useEffect, useState } from "react";
import AdminNavBar from "../NavBar/AdminNavBar";
import { toast } from "react-toastify";
import "./extras.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
const PosterHandle = () => {
  const [avatar, setAvatar] = useState();
  const [file, setFiles] = useState(null);
  const [newAvatar, setNewAvatar] = useState();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const createPosterHandler = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/v1/admin/create/poster",
      {
        public_id: avatar?.public_id,
        url: avatar?.url,
      },
      config
    );

    if (data?.success == true) {
      toast.success("Poster Added Successfuly");
    } else {
      toast.error(data?.message);
    }
  };

  const navigate = useNavigate();

  const handler = () => {
    document.querySelector("nav")?.classList.add("close");
    document.querySelector(".content")?.classList.remove("content-big");
    document.querySelector(".company-heading")?.classList.remove("content-big");
  };
  useEffect(() => {
    handler();
  }, []);

  const getUserDetails = async () => {
    const { data } = await axios.get("/api/v1/me");
    setUser(data);
    setRole(data?.user?.role);
  };

  const handleFile = (e) => {
    const files = Array.from(e.target.files);

    setFiles([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setFiles((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const createPoster = async () => {
    if (file !== null) {
      // console.log("hi");
      toast.warn("Please Wait...");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "flight-booking");

      toast.warn("Uploading the Poster Picture");
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/kapil4457/image/upload",
        formData
      );

      setTimeout(() => {
        let thisData = {
          public_id: data?.public_id,
          url: data?.url,
        };
        setNewAvatar(thisData);
        setAvatar(thisData);
        toast.success("Poster Uploaded Successfully!!");
        while (!thisData.public_id) {}
      }, 6000);
    } else {
      toast.error("Please select a poster !!");
      return;
    }
  };

  useEffect(() => {
    if (!user) {
      getUserDetails();
    }
  });

  useEffect(() => {
    if (avatar?.public_id != "" && avatar?.public_id != null) {
      createPosterHandler();
    }
  }, [avatar]);

  useEffect(() => {
    if (role == "user") {
      toast.error("You are not Authorized !!");
      navigate("/");
    }
    getUserDetails();
  }, [role]);

  useEffect(() => {
    if (user?.success == false) {
      toast.error("Unauthorized Access !!");
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <AdminNavBar />

      {user != null && user?.success == true && role == "admin" ? (
        <>
          <div className="content create-div-cont color-change">
            <div className="create-div">
              <h1>Add Poster</h1>

              <div className="create-form">
                <div>
                  <label htmlFor="name">Poster Image</label>
                  <input type="file" onChange={handleFile} />
                </div>
              </div>
              <button onClick={createPoster}>Create</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default PosterHandle;
