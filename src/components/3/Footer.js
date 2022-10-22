import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import delivery from "../../images/fast-delivery.png";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div
        className="site-card-wrapper"
        style={{
          color: "#fff",
          background: "#242424",
          width: "100vw",
          height: "290px",
          marginTop: "100px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "173x",
            alignItems: "center",
            margin: "50px 200px",
            display: "flex",
            gap: "50px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={delivery}
              alt=""
              style={{ height: "50px", width: "74px", margin: "0 auto" }}
            />
            <p style={{ fontSize: "13px" }}>Fast delivery in 3-5 Days</p>
          </div>
          <div
            style={{
              borderLeft: "2px solid #343434",
              display: "flex",
              padding: "40px",
              gap: "0 100px",
            }}
          >
            <div>
              <h5 style={{ color: "#fff", fontSize: "15px" }}>QUICK LINKS</h5>
              <p style={{ fontSize: "13px" }}>Gift Card</p>
              <p style={{ fontSize: "13px" }}>LookBoo 2021</p>
              <p style={{ fontSize: "13px" }}>Privacy Policy</p>
              <p style={{ fontSize: "13px" }}>Shipping & Refund</p>
            </div>
            <div>
              <h5 style={{ color: "#fff", fontSize: "15px" }}>COMPANY</h5>
              <p style={{ fontSize: "13px" }}>About Us</p>
              <p style={{ fontSize: "13px" }}>Contact Us</p>
              <p style={{ fontSize: "13px" }}>Pricing Plan</p>
              <p style={{ fontSize: "13px" }}>Knowledge Base</p>
            </div>
            <div>
              <h5 style={{ color: "#fff", fontSize: "15px" }}>NEWSLETTER</h5>
              <p style={{ fontSize: "13px" }}>
                Signup & get all our Latest updates and special offers
              </p>
              <input
                type="text"
                style={{ width: "290px" }}
                placeholder="Enter Your Email Address"
              />
              <button
                style={{
                  backgroundColor: "#6B6B6B",
                  borderColor: "transparent",
                }}
              >
                Subscribe
              </button>
              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                  justifyContent: "flex-end",
                  gap: "0 20px",
                }}
              >
                <div className="social">
                  <TfiYoutube />
                </div>
                <div className="social">
                  <AiFillLinkedin />
                </div>
                <div className="social">
                  <BsTwitter />
                </div>
                <div className="social">
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "46px",
          backgroundColor: "#242424",
          borderTop: "2px solid white",
          width: "100vw",
          fontSize: "13px",
          color: "#fff",
          paddingTop: "7px",
        }}
      >
        © 2021 Alba. All Rights Reserved.
      </div>
    </>
  );
}

export default Footer;
