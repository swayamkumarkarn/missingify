import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-main">
      <div className="news_box">
        {" "}
        <div className="news_img">
          {" "}
          <span className="photo-count"></span>{" "}
          <img
            className="img-fluid"
            src="https://lostandfoundnetworks.com/storage/files/in/2800/thumb-320x240-39ac79ecfff4a2705daee2efb8d3e622.jpeg"
            alt="My pet addy dog"
          />{" "}
        </div>
        <div className="news_detail">
          <h2 className="detail-title">My pet addy dog</h2>
          <span className="detail-category">Dog</span>
          <span className="detail-type">Lost</span>
          <div className="detail-loc-time">
            <span className="detail-loc">Chennai</span>
            <span className="detail-time">5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
