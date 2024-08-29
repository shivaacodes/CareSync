import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
//import logoImage from "../assets/logo.jpg";
//import introVideo from "../assets/nature.mp4";
import Client from "../container/Client";

export default function SetPassword() {
  const navigate = useNavigate();
  const [docCreated, setDocCreated] = useState(false);
  const [errorFound, setErrorFound] = useState(false);
  const { JSONData } = useParams();
  const decodedData = decodeURIComponent(JSONData);
  const data = JSON.parse(decodedData);

  const onFinish = (values) => {
    const doc = {
      _id: data.sub,
      _type: "user",
      fullName: data.name,
      email: data.email,
      password: values.password,
      gender: values.gender,
    };

    Client.craeteIfNotExists(doc)
      .then((data) => {
        console.log(data);
        setDocCreated(true);
        setTimeout(() => {
          setDocCreated(false);
          localStorage.clear();
          localStorage.setItem("CareSyncAuth", doc._id);
          navigate("/");
        }, 3000);
      })

      .catch((error) => {});
  };
}
