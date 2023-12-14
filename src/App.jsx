import React, { useEffect, useState } from "react";
// import data from "./data.json";
import "./App.css";
import Cards from "./Cards";
import Navbar from "./Navbar";

const App = () => {
  const [prdData, setPrdData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let apidata = await fetch("https://fakestoreapi.com/products");
      let datas = await apidata.json();
      setPrdData(datas);
    };

    fetchData();
  });

  return (
    <>
      <Navbar />
      <Cards prdData={prdData} />;
    </>
  );
};

export default App;
