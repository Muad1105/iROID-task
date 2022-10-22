import React from "react";
import imageLeftTop from "../../images/block.png";
import imageLeftBottom from "../../images/andrew-neel-cckf4TsHAuw-unsplash.png";
import imageRight from "../../images/Article.png";

function Section3() {
  return (
    <div
      className="section3"
      style={{
        marginTop: "100px",
        left: "170px",
        display: "flex",
        color: "#fff",
      }}
    >
      <div>
        <div className="imgLT" style={{ positive: "relative" }}>
          <img src={imageLeftTop} alt="" className="imageLeftTop" style={{}} />
          <div
            style={{
              position: "absolute",
              width: "550px",
              textAlign: "left",
              paddingLeft: "50px",
              color: "#fff",
              top: "70px",
            }}
          >
            <h5 style={{ color: "white" }}>Our Vision</h5>
            <p
              style={{
                lineHeight: "25px",
                fontSize: "14px",
                fontStyle: "roboto",
                width: "460px",
              }}
            >
              Our vision is to provide prime value to customers by delivering
              supreme quality undergarments in the global market with the intent
              to touch the lives of our employees, immediate society and the
              world community with the understanding -‘we exist because they
              exist’.
            </p>
          </div>
        </div>
        <div>
          <img src={imageLeftBottom} alt="" style={{ width: "550px" }} />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={imageRight} alt="" style={{ height: "506px" }} />
        <div
          style={{
            position: "absolute",
            top: "55px",
            left: "55px",
          }}
        >
          <h5 style={{ textAlign: "left", color: "white", fontSize: "24px" }}>
            Our Mission
          </h5>
          <p style={{ width: "379px", textAlign: "left", fontSize: "14px" }}>
            Our mission is to put in effort wholeheartedly to:
          </p>
          <ul style={{ position: "absolute", left: "-37px" }}>
            <li
              style={{
                width: "321px",
                fontSize: "14px",
                fontFamily: "roboto",
                textAlign: "left",
                lineHeight: "28px",
                paddingBottom: "10px",
              }}
            >
              Ensure the quality of the product excellence through monitoring at
              every stages of production till delivery and customer
              satisfaction.
            </li>
            <li
              style={{
                width: "321px",
                fontSize: "14px",
                fontFamily: "roboto",
                textAlign: "left",
                lineHeight: "28px",
                paddingBottom: "10px",
              }}
            >
              Focus on widening the business every year through a progressive
              approach of associating with prospective textile shops, appointing
              distributors and contracting with business agents.
            </li>
            <li
              style={{
                width: "321px",
                fontSize: "14px",
                fontFamily: "roboto",
                textAlign: "left",
                lineHeight: "28px",
                paddingBottom: "10px",
              }}
            >
              Share part of the profit to ensure the welfare of the employees,
              society & the environment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section3;
