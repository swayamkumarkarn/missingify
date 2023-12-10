import React from "react";
import "./ads.css";
import Card from "../card/Card";
const Ads = () => {
  return (
    <div className="ads-main">
      <h1 className="ads-title">Latest Ads</h1>
      <div className="ads-title-border"></div>
      <div className="ads-div">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Ads;
