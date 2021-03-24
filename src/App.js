import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    // console.log("Response: ", response);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return <h1>Hiiii</h1>;
};
export default App;
